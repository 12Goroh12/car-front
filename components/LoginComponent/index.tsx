import Link from "next/link";
import { Formik, FormikHelpers } from "formik";
import { FC } from "react";
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
  Account,
} from "../../styles/authpage";
import * as yup from "yup";
import { Values } from "../../types/formik";
import { WebsiteUrls } from "../../types/enums";

interface ILoginComponentProps {
  heading: string;
  link: string;
  href: string;
  exist: boolean;
  submitHandler: (values: Values) => void;
  error: string;
  account?: string;
}

const LoginComponent: FC<ILoginComponentProps> = ({
  heading,
  exist,
  link,
  href,
  submitHandler,
  error,
  account,
}) => {
  const accountBack =
    account === "Back" ? WebsiteUrls.REGISTRATION : WebsiteUrls.LOGIN;
  const requiredField = yup.string().required();

  const validationSchema = yup.object().shape({
    name: requiredField,
    password: requiredField,
    email: requiredField,
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
              {exist && <Error>{error}</Error>}
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
          <Link href={accountBack}>
            <Account>{account}</Account>
          </Link>
        </Header>
      </Wrapper>
    </Container>
  );
};

export default LoginComponent;
