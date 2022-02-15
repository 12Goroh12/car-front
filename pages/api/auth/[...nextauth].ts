import { WebsiteUrls } from "./../../../types/enums/index";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
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
  ],
  pages: {
    signIn: WebsiteUrls.LOGIN,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
