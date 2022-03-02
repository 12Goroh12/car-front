import CarList from "../CarList";
import carStore from "../../store/carStore";
import Loading from "../Loading";
import { FC, useEffect, useState } from "react";
import { MdSort } from "react-icons/md";
import { Container, SortButton, SortWrap, Wrapper } from "../../styles/all";
import { ICar } from "../../types/cars";
import { NextRouter, useRouter } from "next/router";
import { WebsiteUrls } from "../../types/enums";
import { observer } from "mobx-react-lite";

interface ICarsComponentProps {
  cars: ICar[];
}

const CarsComponent: FC<ICarsComponentProps> = observer(({ cars }) => {
  const [sorting, setSorting] = useState(false);
  const { pathname }: NextRouter = useRouter();

  useEffect(() => {
    carStore.getCarsInStore();
  }, []);

  const sortMileage = () => {
    setSorting(!sorting);
    const sortMileageFunc = (a: ICar, b: ICar) => {
      return sorting
        ? Number(b.mileage) - Number(a.mileage)
        : Number(a.mileage) - Number(b.mileage);
    };
    cars.sort(sortMileageFunc);
  };

  const sortPrice = () => {
    setSorting(!sorting);
    const sortPriceFunc = (a: ICar, b: ICar) => {
      return sorting
        ? Number(b.price) - Number(a.price)
        : Number(a.price) - Number(b.price);
    };
    cars.sort(sortPriceFunc);
  };

  return (
    <Container imgUrl="/tesla-page.jpg">
      <Wrapper>
        <SortWrap>
          <div>
            <MdSort size={40} />
          </div>
          <SortButton onClick={sortPrice}>Price</SortButton>
          {pathname === WebsiteUrls.USED && (
            <SortButton onClick={sortMileage}>Mileage</SortButton>
          )}
        </SortWrap>
        {cars.length !== 0 ? (
          cars.map((car: ICar) => <CarList key={car._id} car={car} />)
        ) : (
          <Loading />
        )}
      </Wrapper>
    </Container>
  );
});

export default CarsComponent;
