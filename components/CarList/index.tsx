import { observer } from "mobx-react-lite";
import { FC } from "react";
import Image from "next/image";
import { ICar } from "../../types/cars";
import { BaseUrl } from "../../types/enums";
import {
  ButtonGroup,
  Column,
  List,
  Name,
  Price,
  Reserve,
  ReserveBlock,
  Speed,
  SpeedBlock,
  TestDrive,
} from "./style";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

interface ICarList {
  car: ICar;
}

const CarList: FC<ICarList> = ({ car }) => {
  const { pathname }: NextRouter = useRouter();

  return (
    <List>
      <Image
        src={`${BaseUrl.CLOUDINARY_IMAGE}/${car.file[0]}`}
        alt={car.name}
        width={550}
        height={500}
        layout="responsive"
      />
      <Column>
        <Name>{car.name}</Name>
        <Price>Price: {car.price} $</Price>
        <Reserve>
          <Image src="/power.png" alt="speed" width={20} height={30} />
          <ReserveBlock>
            <p>{car.reserve}km</p>
            <span>power reserve</span>
          </ReserveBlock>
        </Reserve>
        <Speed>
          <Image src="/speed.png" alt="speed" width={30} height={20} />
          <SpeedBlock>
            <p> {car.speed}</p>
            <span>0-100 кm/h</span>
          </SpeedBlock>
        </Speed>
        {car.used && (
          <SpeedBlock>
            <span>mileage</span>
            <p>{car.mileage}</p>
          </SpeedBlock>
        )}
      </Column>
      <ButtonGroup>
        <TestDrive>
          <Link href={`${pathname}/${car._id}`}>
            <a>Details</a>
          </Link>
        </TestDrive>
      </ButtonGroup>
    </List>
  );
};

export default observer(CarList);
