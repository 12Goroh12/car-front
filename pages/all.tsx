import Head from "next/head";
import carStore from "../store/carStore";
import CarsComponent from "../components/CarsComponent";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import { useEffect } from "react";

const UsedAndNew: NextPage = observer(() => {
  useEffect(() => {
    carStore.getCarsInStore();
  }, []);

  return (
    <>
      <Head>
        <title>New and Used</title>
      </Head>
      <CarsComponent cars={carStore.cars} />
    </>
  );
});

export default UsedAndNew;
