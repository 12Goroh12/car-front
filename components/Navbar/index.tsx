import { useSession } from "next-auth/react";
import { FC } from "react";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

const Navrabr: FC = () => {
  const { data: session } = useSession();
  let user;
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user") || "null");
  }

  return (
    <>
      {user ? (
        <SignOut admin={user} />
      ) : <SignIn /> && session ? (
        <SignOut />
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Navrabr;
