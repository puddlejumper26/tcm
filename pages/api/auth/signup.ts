import { hashPassword } from "@/lib/auth";
import { connectToUserDatabase } from "@/lib/db";

async function handler(req: any, res: any): Promise<any> {
  // console.log("Login handler - request: " + req.body.email);
  // console.log("Login handler - res: " + res);
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    if (!email || !email.includes("@") || !password || password.trim() === "") {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // store in the DB
    const newMessage = {
      name,
      email,
      password: hashedPassword,
    };

    const client = await connectToUserDatabase();
    const db = client.db();

    const existedUser = await db
      .collection("tcm_user")
      .findOne({ email: email });

    if (existedUser) {
      res.status(422).json({ message: "User already exists" });
      client.close();
      return;
    }

    try {
      console.log("Login Connection... DB Connection");
      const result = await db.collection("tcm_user").insertOne(newMessage);
    } catch (error) {
      console.log("Login Connection Error", error);
      client.close();
      return;
    }

    res.status(201).json({ message: "Successfully store message" });
  }
}

export default handler;
