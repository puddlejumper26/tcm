import { useEffect } from "react";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section>
      <h1 className="absolute inset-0 flex justify-center items-center">
        {/* Input and Search Component  */}
        {/* input */}
        <input />
        {/* Search button */}
      </h1>
    </section>
  );
}

export function getStaticProps() {
  console.log(22222, process.env.GOOGLE_ID);
}

export default StartingPageContent;
