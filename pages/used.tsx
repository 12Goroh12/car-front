import Head from "next/head";
import carStore from "../store/carStore";
import CarsComponent from "../components/CarsComponent";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import { filterUsedCars } from "../utils";

const Used: NextPage = observer(() => (
  <>
    <Head>
      <title>Used</title>
    </Head>
    <CarsComponent cars={filterUsedCars(carStore.cars)} />
  </>
));

export default Used;
