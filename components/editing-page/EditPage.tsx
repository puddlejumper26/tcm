import { TCM_VOCABULARY_TYPE } from "@/pages/api/db/connectDb";
import { signIn } from "next-auth/react";
import { RefObject, useEffect, useRef, useState } from "react";
import AlertMessage from "../alert/Alert";
import ToastStatus from "../toast/Toast";

type ErrorObjType = {
  isError: boolean;
  errorMessage: string;
};

async function createVocabulary(
  name: string | undefined,
  translation: string | undefined,
  description: string | undefined
): Promise<ErrorObjType> {
  const response = await fetch("/api/db/saveDate", {
    method: "POST",
    body: JSON.stringify({ name, translation, description }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  let errorObj = {
    isError: false,
    errorMessage: "",
  };
  if (!response.ok) {
    console.log("Error creating user in EditPage -", response);
    errorObj.isError = true;
    errorObj.errorMessage = data.message;
    // throw new Error(data.message);
    return errorObj;
  }
  return errorObj;
}

function EditPage() {
  const editNameInputRef = useRef() as RefObject<HTMLInputElement>;
  const editTranslationRef = useRef() as RefObject<HTMLInputElement>;
  const editDescriptionRef = useRef() as RefObject<HTMLTextAreaElement>;

  const [toastAlert, setToastAlert] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [time, setTime] = useState(0);

  async function submitFormHandler(event: any) {
    event.preventDefault();
    const enteredName = editNameInputRef.current?.value;
    const enteredTranslation = editTranslationRef.current?.value;
    const enteredDescription = editDescriptionRef.current?.value;

    const result = await createVocabulary(
      enteredName,
      enteredTranslation,
      enteredDescription
    );

    // console.log("EditPage result - ", result);

    if (!!result.isError) {
      setToastAlert("error");
      setToastMessage(result.errorMessage);
      setTime(Math.random());
    } else if (!result.isError) {
      setToastAlert("success");
      setToastMessage("Saved successfully!");
      setTime(Math.random());
    }
  }

  // useEffect(() => {
  //   console.log(11111, toastAlert);
  // });

  return (
    <>
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <div className="">Please submit the </div>
        <label>Name</label>
        <input
          minLength={1}
          type="text"
          id="edit-name-input"
          ref={editNameInputRef}
        />
        <label>Translation</label>
        <input
          minLength={1}
          type="text"
          id="edit-translation"
          ref={editTranslationRef}
        />
        <label>Description</label>
        <textarea id="edit-description" ref={editDescriptionRef} />
        <label>Picture</label>
        {/* Img input */}
        <label>Video</label>
        {/* video input */}
        <div>
          <button>Submit</button>
          {/* TODO: show saved successful / failed */}
        </div>
      </form>
      {/* <AlertMessage message={toastAlert} /> */}
      {!!toastAlert && (
        <ToastStatus
          toastAlert={toastAlert}
          toastMessage={toastMessage}
          time={time}
        />
      )}
    </>
  );
}

export default EditPage;
