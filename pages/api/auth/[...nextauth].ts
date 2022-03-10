import { WebsiteUrls } from "./../../../types/enums/index";
import NextAuth from "next-auth";
import FaceBookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId:
        "779723575957-4dhurqakmv8a45o1k3fu12nbig4n9c0b.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FaceBookProvider({
      clientId: "650608712847274",
      clientSecret: "bf7224882c006804b5031f3fd48ba23d",
    }),
  ],
  // pages: {
  //   signIn: WebsiteUrls.SOCIAL,
  // },
  secret: "01bb6e9512ef1aef5ddbb96f95e385d5",
});
