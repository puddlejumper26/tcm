import { RefObject, useRef, useState } from "react";
import ToastStatus from "../toast/Toast";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";

type ErrorObjType = {
  isError: boolean;
  errorMessage: string;
};

async function createVocabulary(
  name: string | undefined,
  translation: string | undefined,
  source: string | undefined,
  description: string | undefined
): Promise<ErrorObjType> {
  const response = await fetch("/api/db/saveDate", {
    method: "POST",
    body: JSON.stringify({ name, translation, source, description }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  let errorObj = {
    isError: false,
    errorMessage: "",
  };
  if (!response.ok) {
    // console.log("Error creating user in EditPage -", response);
    errorObj.isError = true;
    errorObj.errorMessage = data.message;
    return errorObj;
  }
  return errorObj;
}

function EditPage() {
  const editNameInputRef = useRef() as RefObject<HTMLInputElement>;
  const editTranslationRef = useRef() as RefObject<HTMLInputElement>;
  const editSourceRef = useRef() as RefObject<HTMLTextAreaElement>;
  const editDescriptionRef = useRef() as RefObject<HTMLTextAreaElement>;

  const [toastAlert, setToastAlert] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [time, setTime] = useState(0);

  async function submitFormHandler(event: any) {
    event.preventDefault();
    const enteredName = editNameInputRef.current?.value;
    const enteredTranslation = editTranslationRef.current?.value;
    const enteredSource = editSourceRef.current?.value;
    const enteredDescription = editDescriptionRef.current?.value;

    const result = await createVocabulary(
      enteredName,
      enteredTranslation,
      enteredSource,
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

  // TODO localStorage to save changes

  return (
    <>
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <Stack spacing={3}>
          <label>Name</label>
          <Input
            placeholder="Name"
            htmlSize={1}
            id="edit-name-input"
            ref={editNameInputRef}
            size="lg"
          />
          <label>Translation</label>
          <Input
            htmlSize={1}
            placeholder="Translation"
            size="lg"
            id="edit-translation"
            ref={editTranslationRef}
          />
          <label>Description</label>
          <Textarea
            id="edit-description"
            placeholder="Please enter description"
            size="sm"
            resize={"vertical"}
            ref={editDescriptionRef}
          />
          <label>Source</label>
          <Textarea
            id="edit-source"
            placeholder="Please enter Source"
            size="sm"
            resize={"vertical"}
            ref={editSourceRef}
          />
        </Stack>

        {/* <label>Picture</label> */}
        {/* Img input */}
        {/* <label>Video</label> */}
        {/* video input */}

        <div className="mt-10 h-20">
          <button className="w-full h-20 rounded-md bg-lime-900 text-gray-50">
            Submit
          </button>
        </div>
      </form>

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
