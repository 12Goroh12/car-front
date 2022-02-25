import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Image } from "cloudinary-react";
import { ICar } from "../../types/cars";
import { BaseUrl, KeyCloudinary } from "../../types/enums";
import {
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

interface ICarList {
  car: ICar;
}

const CarList: FC<ICarList> = ({ car }) => {
  return (
    <List>
      <Image
        alt={car.name}
        width="350px"
        height="300px"
        cloudName={KeyCloudinary.KEY}
        publicId={`${BaseUrl.CLOUDINARY_IMAGE}/${car.file[0]}`}
      />
      <Column>
        <Name>{car.name}</Name>
        <Price>Price: {car.price} $</Price>
        <Reserve>
          <img src="/power.png" alt="speed" width={20} height={30} />
          <ReserveBlock>
            <p>{car.reserve}km</p>
            <span>power reserve</span>
          </ReserveBlock>
        </Reserve>
        <Speed>
          <img src="/speed.png" alt="speed" width={30} height={20} />
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
      <TestDrive>Test Drive</TestDrive>
    </List>
  );
};

export default observer(CarList);
