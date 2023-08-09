import DictionaryPage from "@/components/dictionary-page/DictionaryPage";
import { DBDataType } from "@/utils/common.type";
import { fetchAllDBData } from "./api/db/connectDb";

function Dictionary(props: DBDataType) {
  return (
    <div className="min-h-screen flex-col items-center p-24">
      <DictionaryPage props={props} />
    </div>
  );
}

export default Dictionary;

export async function getServerSideProps() {
  const result = await fetchAllDBData();
  const data = JSON.parse(JSON.stringify(result));
  // console.log("Dictionary - getServerSideProps - data: " + data);

  // TODO Sortings
  // TODO Filtering

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
