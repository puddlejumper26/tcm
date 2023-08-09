import Image from "next/image";
import StartingPageContent from "@/components/starting-page/starting-page";
import { fetchAllDBData, fetchDBData } from "./api/db/connectDb";
import { DBDataType } from "@/utils/common.type";

export default function Home(props: any) {
  // console.log(1111, props);

  const a = [1, 2, 3];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <StartingPageContent props={props} />
    </main>
  );
}

export async function getServerSideProps() {
  const result = await fetchDBData("1");
  const data = JSON.parse(JSON.stringify(result));

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
