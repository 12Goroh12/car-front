import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import CarList from "../components/CarList";
import Loading from "../components/Loading";
import carStore from "../store/carStore";
import { Container, Wrapper } from "../styles/all";
import { ICar } from "../types/cars";

const UsedAndNew: NextPage = observer(() => {
  useEffect(() => {
    carStore.getCarsInStore();
  }, []);

  return (
    <>
      <Head>
        <title>New and Used</title>
      </Head>
      <Container imgUrl="/tesla-page.jpg">
        {carStore.isLoading ? (
          <Loading />
        ) : (
          <Wrapper>
            {carStore.cars.map((car: ICar) => {
              return <CarList key={car._id} car={car} />;
            })}
          </Wrapper>
        )}
      </Container>
    </>
  );
});

export default UsedAndNew;
