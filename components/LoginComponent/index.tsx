import Link from "next/link";
import { Formik, FormikHelpers } from "formik";
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

interface ILoginComponentProps {
  heading: string;
  link: string;
  href: string;
}

const LoginComponent: FC<ILoginComponentProps> = ({ heading, link, href }) => {
  const router: NextRouter = useRouter();

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
  });

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
            await axios
              .post(`${BaseUrl.URL}auth/register`, values)
              .then((resp) => console.log(resp));
            setSubmitting(false);
            router.push(WebsiteUrls.HOME);
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
              {touched.name && errors.name && <Error>{errors.password}</Error>}
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
              {touched.name && errors.name && <Error>{errors.email}</Error>}
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
