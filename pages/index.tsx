import Head from "next/head";
import type { NextPage } from "next";
import { Container } from "../styles/home";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home page</title>
    </Head>
    {/* here are the components  */}
    <Container imgUrl="/images/model-s.jpg">Car Section</Container>
    <Container imgUrl="/images/new-interior.jpg">Interior Section</Container>
    <Container imgUrl="/images/solar-roof.jpg">Solar roof</Container>
    <Container imgUrl="/images/solar-panel.jpg">Solar Panel</Container>
    <Container imgUrl="/images/accessories.jpg">Accessories</Container>
  </>
);

export default Home;
