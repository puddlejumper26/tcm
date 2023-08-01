import { TCM_VOCABULARY_TYPE } from "@/pages/api/db/connectDb";
import { signIn } from "next-auth/react";
import { RefObject, useEffect, useRef, useState } from "react";
import AlertMessage from "../alert/Alert";

async function createVocabulary(
  name: string | undefined,
  translation: string | undefined,
  description: string | undefined
): Promise<string> {
  const response = await fetch("/api/db/saveDate", {
    method: "POST",
    body: JSON.stringify({ name, translation, description }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  let error: string;
  if (!response.ok) {
    console.log("Error creating user in EditPage -", response);
    error = "Error";
    // throw new Error(data.message);
  }

  return data;
}

function EditPage() {
  const editNameInputRef = useRef() as RefObject<HTMLInputElement>;
  const editTranslationRef = useRef() as RefObject<HTMLInputElement>;
  const editDescriptionRef = useRef() as RefObject<HTMLTextAreaElement>;

  const [alert, setAlert] = useState("");

  async function submitFormHandler(event: any) {
    event.preventDefault();
    console.log("== Edit Page, Submit Hander ==");
    const enteredName = editNameInputRef.current?.value;
    const enteredTranslation = editTranslationRef.current?.value;
    const enteredDescription = editDescriptionRef.current?.value;

    const result = await createVocabulary(
      enteredName,
      enteredTranslation,
      enteredDescription
    );
    console.log("EditPage result - ", result);
    setAlert("Success");
  }

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
      <AlertMessage message={alert} />
    </>
  );
}

export default EditPage;
