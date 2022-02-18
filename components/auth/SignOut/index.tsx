import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/tesla.svg";
import { Button, Container, Logo } from "../../Navbar/style";
import { WebsiteUrls } from "../../../types/enums";
import { signOut } from "next-auth/react";
import { FC } from "react";
import userStore from "../../../store/userStore";

const SignOut: FC = () => {
  const signOutHandler = () => {
    userStore.removeUser();
    signOut();
  };

  return (
    <Container>
      <Logo>
        <Link href={WebsiteUrls.HOME}>
          <a>
            <Image src={logo} alt="logo" width={130} height={30} />
          </a>
        </Link>
      </Logo>
      <Button onClick={signOutHandler}>Sign out</Button>
    </Container>
  );
};

export default SignOut;
