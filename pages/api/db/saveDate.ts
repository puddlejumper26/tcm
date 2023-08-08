import { connectToUserDatabase } from "@/lib/db";

async function handler(req: any, res: any): Promise<any> {
  console.log("DB handler - request: " + req.body.email);
  console.log("DB handler - res: " + res);
  if (req.method === "POST") {
    const { name, translation, source, description } = req.body;
    if (!name) {
      res.status(422).json({ message: "Invalid DB Input" });
      return;
    }

    // store in the DB
    const newMessage = {
      name,
      translation,
      source,
      description,
    };

    const client = await connectToUserDatabase();
    const db = client.db();

    const existedUser = await db
      .collection("tcm_professional")
      .findOne({ name: name });

    if (existedUser) {
      res.status(422).json({ message: "Name already exists" });
      client.close();
      return;
    }

    try {
      console.log("Login Connection... DB Connection");
      const result = await db
        .collection("tcm_professional")
        .insertOne(newMessage);
    } catch (error) {
      console.log("Login Connection Error", error);
      client.close();
      return;
    }

    res.status(201).json({ message: "Successfully store new Vocabulary" });
  }
}

export default handler;
