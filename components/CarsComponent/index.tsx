import CarList from "../CarList";
import carStore from "../../store/carStore";
import Loading from "../Loading";
import { FC, useEffect, useState } from "react";
import { MdSort } from "react-icons/md";
import { Container, SortButton, SortWrap, Wrapper } from "../../styles/all";
import { ICar } from "../../types/cars";

interface ICarsComponentProps {
  cars: ICar[];
}

const CarsComponent: FC<ICarsComponentProps> = ({ cars }) => {
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    carStore.getCarsInStore();
  }, []);

  const sortPrice = () => {
    setSorting(!sorting);
    const sortFunc = (a: ICar, b: ICar) => {
      return sorting
        ? Number(b.price) - Number(a.price)
        : Number(a.price) - Number(b.price);
    };
    cars.sort(sortFunc);
  };

  return (
    <Container imgUrl="/tesla-page.jpg">
      <Wrapper>
        <SortWrap>
          <div>
            <MdSort size={40} />
          </div>
          <SortButton onClick={sortPrice}>Price</SortButton>
        </SortWrap>
        {cars.length !== 0 ? (
          cars.map((car: ICar) => <CarList key={car._id} car={car} />)
        ) : (
          <Loading />
        )}
      </Wrapper>
    </Container>
  );
};

export default CarsComponent;
