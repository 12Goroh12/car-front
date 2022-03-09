import { FC, useEffect, useState } from "react";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

const Navrabr: FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [showNavbar, setNavbarShow] = useState(false);
  let user;
  let userSocial;
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user") || "null");
    userSocial = JSON.parse(localStorage.getItem("social") || "null");
  }

  useEffect(() => {
    setHasMounted(true);
    const win: Window = window;

    const onScroll: EventListener = () => {
      win.scrollY > 20 ? setNavbarShow(true) : setNavbarShow(false);
    };

    win.addEventListener("scroll", onScroll);

    return () => {
      win.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!hasMounted) {
    return null;
  }

  return user || userSocial ? (
    <SignOut showNavbar={showNavbar} admin={user} />
  ) : (
    <SignIn showNavbar={showNavbar} />
  );
};

export default Navrabr;
