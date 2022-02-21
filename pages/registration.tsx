import { NextPage } from "next";
import Head from "next/head";
import Registration from "../components/Registration";

const RegistrationPage: NextPage = () => (
  <>
    <Head>
      <title>Registration page</title>
    </Head>
    <Registration />
  </>
);

export default RegistrationPage;
