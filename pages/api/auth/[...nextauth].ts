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
        "657855454902-k6m2g3lohuvpqti1lilpu1ch9t2a3krk.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FaceBookProvider({
      clientId: "650608712847274",
      clientSecret: "bf7224882c006804b5031f3fd48ba23d",
    }),
  ],
  pages: {
    signIn: WebsiteUrls.SOCIAL,
  },
  secret: "01bb6e9512ef1aef5ddbb96f95e385d5",
});
