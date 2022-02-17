import { NextPage } from "next";
import Registration from "../components/Registration";
import Login from "../components/Login";
import React from "react";
import Head from "next/head";

const AuthPage: NextPage = () => {
  //temporary variable
  const user = true;
  return (
    <React.Fragment>
      <Head>
        <title>Auth Page</title>
      </Head>
      {!user ? <Registration /> : <Login />}
    </React.Fragment>
  );
};

export default AuthPage;
