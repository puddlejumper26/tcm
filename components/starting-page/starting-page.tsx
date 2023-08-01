import { useEffect } from "react";
import MainPage from "./Main-page";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section>
      <div className="relative inset-0 flex justify-center items-center">
        {/* Input and Search Component  */}
        <MainPage />
      </div>
    </section>
  );
}

export function getStaticProps() {
  console.log(22222, process.env.GOOGLE_ID);
}

export default StartingPageContent;
