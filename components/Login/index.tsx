import axios from "axios";
import { observer } from "mobx-react-lite";
import { NextRouter, useRouter } from "next/router";
import { FC, useState } from "react";
import userStore from "../../store/userStore";
import { BaseUrl, WebsiteUrls } from "../../types/enums";
import { Values } from "../../types/formik";
import LoginComponent from "../LoginComponent";

const Login: FC = () => {
  const [exist, setExist] = useState(false);
  const router: NextRouter = useRouter();

  const submitHandler = async (values: Values) => {
    try {
      const { data } = await axios.post(`${BaseUrl.URL}auth/login`, values);

      userStore.addUser(data.user);

      data.message === "user not found with this email"
        ? setExist(true)
        : router.push(WebsiteUrls.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginComponent
      heading="Sign in"
      link="Sign in with Social"
      href={WebsiteUrls.SOCIAL}
      exist={exist}
      submitHandler={submitHandler}
      error="email address not found"
      account="Back"
    />
  );
};

export default observer(Login);
