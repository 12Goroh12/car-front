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
        "657855454902-e9mfjs14vrfb9morscgul344nu5bp0ic.apps.googleusercontent.com",
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
