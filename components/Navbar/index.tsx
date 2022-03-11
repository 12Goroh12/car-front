import { NextRouter, useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Roles, WebsiteUrls } from "../../types/enums";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";
import Redirect from "../Redirect";

const Navrabr: FC = () => {
  const { pathname }: NextRouter = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  const [showNavbar, setNavbarShow] = useState(false);

  let user;
  let userSocial;

  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user") || "null");
    userSocial = JSON.parse(localStorage.getItem("social") || "null");
  }
  const isUser = user?.roles[0] === Roles.USER;

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

  if (pathname === WebsiteUrls.CREATE_CAR) {
    if (isUser || !user || !userSocial) {
      return <Redirect to={WebsiteUrls.HOME} />;
    }
  }

  return user || userSocial ? (
    <SignOut showNavbar={showNavbar} admin={user} />
  ) : (
    <SignIn showNavbar={showNavbar} />
  );
};

export default Navrabr;
