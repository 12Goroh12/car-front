import Head from "next/head";
import carStore from "../store/carStore";
import CarsComponent from "../components/CarsComponent";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import { useEffect } from "react";
import { ICar } from "../types/cars";

const NewCar: NextPage = observer(() => {
  const newCars = carStore.cars.filter((car: ICar) => !car.used);

  useEffect(() => {
    carStore.getCarsInStore();
  }, []);

  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <CarsComponent cars={newCars} />
    </>
  );
});

export default NewCar;
