import { connectToDatabase } from "@/lib/db";
import { NextAuthCredentialsReturn } from "@/utils/common.type";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials: any, req: any): Promise<any> {
        console.log("NextAuth - authorize - credentials - ", credentials);
        try {
          const client = await connectToDatabase();
          const userCollection = client.db().collection("tcm_user");
          const user = await userCollection.findOne({
            email: credentials.email,
          });

          if (!user) {
            client.close();
            console.log("NextAuth - No user found");
            throw new Error("No User Found");
          }

          // TODO: compare the password

          client.close();
          // 最后会返回一个 object， 说明 auth 成功，这里只放入一个 email，因为不想password被展示出来
          return { email: user.email };
        } catch (error) {
          console.log("NextAuth - authorize - error - ", error);
        }
      },
    }),
  ],
});
