import LoginButton from "../components/LoginButton";
import { GetServerSideProps, NextPage } from "next";
import { Form, Title, Wrapper } from "../styles/social";
import { getProviders, getSession, useSession } from "next-auth/react";
import { IProviders } from "../types/provider";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { WebsiteUrls } from "../types/enums";
import { ISession } from "../types/session";

interface ISocialProps {
  providers: IProviders;
  sessions: ISession;
}

const Social: NextPage<ISocialProps> = ({ providers, sessions }) => {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();

  if (sessions) {
    localStorage.setItem("social", JSON.stringify(session?.user));
    router.push(WebsiteUrls.HOME);
  }
  return (
    <Wrapper imgUrl="/images/connected.jpg">
      <Head>
        <title>Social page</title>
      </Head>

      <Form>
        <Title>Log in to your account</Title>

        <LoginButton color="#171515" provider={providers.github} />

        <LoginButton color="#4285f4" provider={providers.google} />
        <LoginButton color="#3b5998" provider={providers.facebook} />
      </Form>
    </Wrapper>
  );
};

export default Social;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const sessions = await getSession(context);

  return {
    props: { providers, sessions },
  };
};
