import Head from "next/head";
import carStore from "../store/carStore";
import CarsComponent from "../components/CarsComponent";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import { filterNewCars } from "../utils";

const NewCar: NextPage = observer(() => (
  <>
    <Head>
      <title>New</title>
    </Head>
    <CarsComponent cars={filterNewCars(carStore.cars)} />
  </>
));

export default NewCar;
