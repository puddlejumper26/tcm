import DictionaryPage from "@/components/dictionary-page/DictionaryPage";
import { DBDataType } from "@/utils/common.type";

function Dictionary(props: DBDataType) {
  return (
    <div className="min-h-screen flex-col items-center p-24">
      <DictionaryPage props={props} />
    </div>
  );
}

export default Dictionary;

export function getServerSideProps() {
  return {
    props: {
      name: "a",
      translation: "a",
      source: "sources",
      description: "aa",
    },
  };
}
