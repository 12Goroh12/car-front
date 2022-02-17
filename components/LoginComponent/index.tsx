import Link from "next/link";
import { ErrorMessage, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";
import {
  Button,
  Container,
  FormBlock,
  Header,
  Heading,
  Input,
  Links,
  Wrapper,
  Error,
} from "../../styles/authpage";
import * as yup from "yup";
import { Values } from "../../types/formik";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import { WebsiteUrls } from "../../types/enums";
import { BaseUrl } from "../../types/enums/index";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

interface ILoginComponentProps {
  heading: string;
  link: string;
  href: string;
}

const LoginComponent: FC<ILoginComponentProps> = ({ heading, link, href }) => {
  const [exist, setExist] = useState(false);
  const router: NextRouter = useRouter();
  const requiredField = yup.string().required();

  const validationSchema = yup.object().shape({
    name: requiredField,
    password: requiredField,
    email: requiredField,
  });

  const submitHandler = async (values: Values) => {
    try {
      const response = await axios.post(`${BaseUrl.URL}auth/register`, values);

      response.data.message === "email exists"
        ? setExist(true)
        : router.push(WebsiteUrls.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
          }}
          validationSchema={validationSchema}
          validateOnBlur
          onSubmit={async (
            values: Values,
            { setSubmitting, resetForm }: FormikHelpers<Values>
          ) => {
            submitHandler(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            handleBlur,
          }) => (
            <FormBlock>
              <label htmlFor="name">Name</label>
              <Input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                id="name"
                name="name"
                placeholder="John"
                type="text"
              />
              {touched.name && errors.name && <Error>{errors.name}</Error>}
              <label htmlFor="password">Password</label>
              <Input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                name="password"
                type="password"
              />
              {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
              <label htmlFor="email">Email</label>
              <Input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
              />
              {exist && <Error>This Email already exists</Error>}
              {touched.email && errors.email && <Error>{errors.email}</Error>}
              <Button onClick={handleSubmit} disabled={!isValid} type="submit">
                Submit
              </Button>
            </FormBlock>
          )}
        </Formik>
        <Header>
          <Heading>{heading}</Heading>
          <Link href={href}>
            <Links>{link}</Links>
          </Link>
        </Header>
      </Wrapper>
    </Container>
  );
};

export default LoginComponent;
