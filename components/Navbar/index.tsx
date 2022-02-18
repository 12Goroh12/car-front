import { useSession } from "next-auth/react";
import { FC } from "react";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

const Navrabr: FC = () => {
  const { data: session } = useSession();
  let user;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("user");
  }

  return user || session ? <SignOut /> : <SignIn />;
};

export default Navrabr;
