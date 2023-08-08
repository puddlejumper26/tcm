import { connectToUserDatabase } from "@/lib/db";
import { DBDataType } from "@/utils/common.type";

export type TCM_VOCABULARY_TYPE = {
  name: string | undefined;
  translation: string | undefined;
  description: string | undefined;
  // ToDo
  // source
  // descInternet: string;
  // image: string;
  // video: string;
};

async function connectToDatabase() {
  const client = await connectToUserDatabase();
  const userCollection = client.db().collection("tcm_professional");
}

export async function fetchAllDBData(): Promise<any | undefined> {
  const client = await connectToUserDatabase();
  const userCollection = client.db().collection("tcm_professional");

  const result = await userCollection.find({}).toArray();

  if (!!result) {
    return result;
  }
  return undefined;
}

export async function fetchDBData(name: string): Promise<string | undefined> {
  const client = await connectToUserDatabase();
  const userCollection = client.db().collection("tcm_professional");

  const result = await userCollection.findOne({
    name: name,
  });

  if (result?.length > 0) {
    return result?.translation;
  }
  return undefined;
}
