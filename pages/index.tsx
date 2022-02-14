import Head from "next/head";
import type { NextPage } from "next";
import { Container } from "../styles/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Container>Home Page</Container>
    </>
  );
};

export default Home;
