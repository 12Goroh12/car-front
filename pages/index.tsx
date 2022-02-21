import Head from "next/head";
import type { NextPage } from "next";
import Content from "../components/Content";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home page</title>
    </Head>
    <Content
      title="Tesla"
      description="Order Online for Touchless Delivery"
      image="/tesla-page-1.jpg"
    />
    <Content
      title="Interior, design and technology"
      description="If you want to feel part of a digital future, the Model S is sure to impress"
      image="/images/new-interior.jpg"
    />
    <Content
      title="Solar for New Roofs"
      description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      image="/images/solar-roof.jpg"
    />
    <Content
      title="Lowest Cost Solar Panels in America"
      description="Money-back guarantee"
      image="/images/solar-panel.jpg"
    />
    <Content title="Accessories" image="/images/accessories.jpg" />
  </>
);

export default Home;
