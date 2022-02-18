import { FC } from "react";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

const Navrabr: FC = () => {
  let user;
  let userSocial;
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user") || "null");
    userSocial = JSON.parse(localStorage.getItem("social") || "null");
  }

  return user || userSocial ? <SignOut admin={user} /> : <SignIn />;
};

export default Navrabr;
