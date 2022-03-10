import { signIn, useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import { WebsiteUrls } from "../../types/enums";
import { IProvider } from "../../types/provider";
import { Button } from "./style";

interface ButtonProps {
  provider: IProvider;
  color: string;
}

const LoginButton: FC<ButtonProps> = ({ provider, color }) => {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();

  const handleClick = () => {
    signIn(provider.id);
    localStorage.setItem("social", JSON.stringify(session?.user));
    router.push(WebsiteUrls.HOME);
  };

  return (
    <Button color={color} onClick={handleClick}>
      Sign in with {provider.name}
    </Button>
  );
};

export default LoginButton;
