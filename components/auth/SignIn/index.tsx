import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/tesla.svg";
import { Button, ButtonGroup, Container, Logo } from "../../Navbar/style";
import { WebsiteUrls } from "../../../types/enums";
import { FC } from "react";
import { useRouter } from "next/router";

interface SignInProps {
  showNavbar: boolean;
}

const SignIn: FC<SignInProps> = ({ showNavbar }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(WebsiteUrls.REGISTRATION);
  };

  return (
    <Container show={showNavbar}>
      <Logo>
        <Link href={WebsiteUrls.HOME}>
          <a>
            <Image src={logo} alt="logo" width={130} height={50} />
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
