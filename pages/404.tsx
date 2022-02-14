import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { WebsiteUrls } from "../types/enums";
import { Someting, Wrap } from "../styles/404";

const Error: NextPage = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(WebsiteUrls.HOME);
    }, 4000);
  }, [router]);

  return (
    <Wrap>
      <Head>
        <title>Error</title>
      </Head>
      <Someting>Someting error 404</Someting>
    </Wrap>
  );
};

export default Error;
