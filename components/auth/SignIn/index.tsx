import Link from "next/link";
import Image from "next/image";
import { Button, ButtonGroup, Container, Logo } from "../../Navbar/style";
import { WebsiteUrls } from "../../../types/enums";
import { FC } from "react";
import { NextRouter, useRouter } from "next/router";

interface SignInProps {
  showNavbar: boolean;
}

const SignIn: FC<SignInProps> = ({ showNavbar }) => {
  const router: NextRouter = useRouter();

  const handleClick = () => {
    router.push(WebsiteUrls.REGISTRATION);
  };

  return (
    <Container show={showNavbar}>
      <Logo>
        <Link href={WebsiteUrls.HOME}>
          <a>
            <Image src="/public/tesla.svg" alt="logo" width={130} height={50} />
          </a>
        </Link>
      </Logo>

      <ButtonGroup>
        <Button onClick={handleClick}>Sign in</Button>
      </ButtonGroup>
    </Container>
  );
};

export default SignIn;
