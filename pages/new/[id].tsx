import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import CarDetail from "../../components/CarDetail";

interface CarProps {
  carId: string;
}

const New: NextPage<CarProps> = ({ carId }) => (
  <>
    <Head>
      <title>Detail Car Page</title>
    </Head>
    <CarDetail carId={carId} />;
  </>
);

export default New;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: { carId: query.id },
  };
};
