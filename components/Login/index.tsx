import Link from "next/link";
import { Field, Formik } from "formik";
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

const Login: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
          }}
          onSubmit={(values: Values) => {
            console.log(values);
          }}
        >
          <FormBlock>
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" placeholder="John" type="text" />
            <label htmlFor="password">Password</label>
            <Input id="password" name="password" type="password" />
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <Button>Submit</Button>
          </FormBlock>
        </Formik>
        <Header>
          <Heading>Sign in </Heading>
          <Link href={WebsiteUrls.SOCIAL}>
            <Links>Sign in with Social</Links>
          </Link>
        </Header>
      </Wrapper>
    </Container>
  );
};

export default Login;
