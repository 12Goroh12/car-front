import { useSession } from "next-auth/react";
import { FC } from "react";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

const Navrabr: FC = () => {
  const { data: session } = useSession();

  if (!session) {
    return <SignIn />;
  }

  return <SignOut />;
};

export default Navrabr;
