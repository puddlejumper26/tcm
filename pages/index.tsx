import Image from "next/image";
import StartingPageContent from "@/components/starting-page/starting-page";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <StartingPageContent />
    </main>
  );
}

export function getStaticProps() {
  console.log(1111, process.env.GOOGLE_ID);
  return {
    props: {
      posts: "",
    },
    revalidate: 60,
  };
}
