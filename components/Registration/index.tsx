import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import { FC, useState } from "react";
import { BaseUrl, WebsiteUrls } from "../../types/enums";
import { Values } from "../../types/formik";
import LoginComponent from "../LoginComponent";

const Registration: FC = () => {
  const [exist, setExist] = useState(false);
  const router: NextRouter = useRouter();

  const submitHandler = async (values: Values) => {
    try {
      await axios
        .post(`${BaseUrl.URL}auth/register`, values)
        .then(({ data }) => data && router.push(WebsiteUrls.LOGIN))
        .catch(({ response }) => {
          response.status === 400 && setExist(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginComponent
      heading="Registration"
      link="Log in with account social"
      href={WebsiteUrls.SOCIAL}
      exist={exist}
      submitHandler={submitHandler}
      error="This Email already exists"
      account="have an account?"
    />
  );
};

export default Registration;
