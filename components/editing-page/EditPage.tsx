import { signIn } from "next-auth/react";
import { RefObject, useEffect, useRef } from "react";

function EditPage() {
  const editNameInputRef = useRef() as RefObject<HTMLInputElement>;
  const editTranslationRef = useRef() as RefObject<HTMLInputElement>;
  const editDescriptionRef = useRef() as RefObject<HTMLTextAreaElement>;

  async function submitFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredName = editNameInputRef.current?.value;
    const enteredTranslation = editTranslationRef.current?.value;
    const enteredDescription = editDescriptionRef.current?.value;

    const result = await signIn("credentials", {
      redirect: false,
      name: enteredName,
      translation: enteredTranslation,
      description: enteredDescription,
    });
    console.log("AuthForm result - ", result);
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <div className="">Please submit the </div>
        <label>Name</label>
        <input type="text" id="edit-name-input" ref={editNameInputRef} />
        <label>Traslation</label>
        <input type="text" id="edit-translation" ref={editTranslationRef} />
        <label>Description</label>
        <textarea id="edit-description" ref={editDescriptionRef} />
        <label>Picture</label>
        {/* Img input */}
        <label>Video</label>
        {/* video input */}
        <div>
          <button type="button" className="">
            Submit
          </button>
          {/* TODO: show saved successful / failed */}
        </div>
      </form>
    </>
  );
}

export default EditPage;
