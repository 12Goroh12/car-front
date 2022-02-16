import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/tesla.svg";
import { Button, Container, Logo } from "../../Navbar/style";
import { WebsiteUrls } from "../../../types/enums";
import { signOut, useSession } from "next-auth/react";
import { FC } from "react";

const SignOut: FC = () => {
  const { data: session } = useSession();

  return (
    <Container>
      <Logo>
        <Link href={WebsiteUrls.HOME}>
          <a>
            <Image src={logo} alt="logo" width={130} height={30} />
          </a>
        </Link>
      </Logo>
      <div>{session?.user?.name}</div>
      <Button onClick={signOut}>Sign out</Button>
    </Container>
  );
};

export default SignOut;
