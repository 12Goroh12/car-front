import { FC, useEffect, useState } from "react";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

const Navrabr: FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  let user;
  let userSocial;
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user") || "null");
    userSocial = JSON.parse(localStorage.getItem("social") || "null");
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return user || userSocial ? <SignOut admin={user} /> : <SignIn />;
};

export default Navrabr;
