import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/tesla.svg";
import { Button, ButtonGroup, Container, Logo } from "../../Navbar/style";
import { WebsiteUrls } from "../../../types/enums";
import { FC } from "react";
import { useRouter } from "next/router";

const SignIn: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(WebsiteUrls.AUTH_PAGE);
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
      <ButtonGroup>
        <Button onClick={handleClick}>Sign in</Button>
      </ButtonGroup>
    </Container>
  );
};

export default SignIn;
