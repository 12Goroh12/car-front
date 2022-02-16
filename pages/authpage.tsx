import { NextPage } from "next";
import Registration from "../components/Registration";
import Login from "../components/Login";
import React from "react";

const AuthPage: NextPage = () => {
  //temporary variable
  const user = true;
  return (
    <React.Fragment>{!user ? <Registration /> : <Login />}</React.Fragment>
  );
};

export default AuthPage;
