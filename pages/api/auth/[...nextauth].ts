import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import {
  NextAuthCredentials,
  NextAuthCredentialsReturn,
} from "@/utils/common.type";

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any, req: any): Promise<any> {
        console.log("NextAuth - authorize - credentials - ", credentials);
        try {
          const client = await connectToDatabase();
          const userCollection = client.db().collection("tcm_user");
          const user = await userCollection.findOne({
            email: credentials?.email,
          });

          if (!user) {
            client.close();
            console.log("NextAuth - No user found");
            throw new Error("No User Found");
          }

          // compare the password
          const isValid = await verifyPassword(
            user.password,
            credentials.password
          );

          if (!isValid) {
            client.close();
            console.log("NextAuth - Passwords do not match");
            throw new Error("Password is not valid");
          }

          client.close();
          // 最后会返回一个 object， 说明 auth 成功，这里只放入一个 email，因为不想password被展示出来
          return { email: user.email };
        } catch (error) {
          console.log("NextAuth - authorize - error - ", error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/profile",
  },
};

export default NextAuth(authOptions);
