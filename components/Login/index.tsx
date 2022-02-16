import { FC } from "react";
import { WebsiteUrls } from "../../types/enums";
import LoginComponent from "../LoginComponent";

const Login: FC = () => (
  <LoginComponent
    heading="Sign in"
    link="Sign in with Social"
    href={WebsiteUrls.SOCIAL}
  />
);

export default Login;
