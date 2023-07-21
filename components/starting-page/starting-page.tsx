import { useEffect } from "react";
import MainPage from "./main-page";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section>
      <h1 className="absolute inset-0 flex justify-center items-center">
        {/* Input and Search Component  */}
        <MainPage />
      </h1>
    </section>
  );
}

export function getStaticProps() {
  console.log(22222, process.env.GOOGLE_ID);
}

export default StartingPageContent;
