import { Field, Formik, FormikHelpers } from "formik";
import Link from "next/link";
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
} from "../../styles/authpage";
import { WebsiteUrls } from "../../types/enums";
import { Values } from "../../types/formik";

const Registration: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            console.log(values);
          }}
        >
          <FormBlock>
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" placeholder="Name" type="text" />
            <label htmlFor="password">Password</label>
            <Input id="password" name="password" type="password" />
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <Button type="submit">Submit</Button>
          </FormBlock>
        </Formik>
        <Header>
          <Heading>Registration</Heading>
          <Link href={WebsiteUrls.SOCIAL}>
            <Links>Log in with account social</Links>
          </Link>
        </Header>
      </Wrapper>
    </Container>
  );
};

export default Registration;
