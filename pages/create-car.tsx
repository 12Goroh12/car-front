import { NextPage } from "next";
import { Container } from "../styles/create-car";
import Head from "next/head";

const CreateCar: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create page</title>
      </Head>
      <Container imgUrl="/create-tesla.png">Create-Page</Container>;
    </>
  );
};

export default CreateCar;
