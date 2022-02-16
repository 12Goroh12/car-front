import { FC } from "react";
import { WebsiteUrls } from "../../types/enums";
import LoginComponent from "../LoginComponent";

const Registration: FC = () => (
  <LoginComponent
    heading="Registration"
    link="Log in with account social"
    href={WebsiteUrls.SOCIAL}
  />
);

export default Registration;
