import LoginButton from "../components/LoginButton";
import { GetServerSideProps, NextPage } from "next";
import { Form, Title, Wrapper } from "../styles/login";
import { getProviders, useSession } from "next-auth/react";
import { IProviders } from "../types/provider";
import { NextRouter, useRouter } from "next/router";
import { WebsiteUrls } from "../types/enums";

interface ILoginProps {
  providers: IProviders;
}

const Login: NextPage<ILoginProps> = ({ providers }) => {
  const { data: session } = useSession();
  const router: NextRouter = useRouter();

  if (session) {
    router.push(WebsiteUrls.HOME);
  }

  return (
    <Wrapper>
      <Form>
        <Title>Login via social networks</Title>
        <LoginButton color="#171515" provider={providers.github} />
        <LoginButton color="#4285f4" provider={providers.google} />
      </Form>
    </Wrapper>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
