import Link from "next/link";
import { Formik } from "formik";
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
import { Values } from "../../types/formik";

interface ILoginComponentProps {
  heading: string;
  link: string;
  href: string;
}

const LoginComponent: FC<ILoginComponentProps> = ({ heading, link, href }) => {
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
