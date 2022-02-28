import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import {
  Block,
  Button,
  ButtonGroup,
  Container,
  Heading,
  SpeedBlock,
} from "./style";
import { ICar } from "../../types/cars";
import { BaseUrl } from "../../types/enums";
import Image from "next/image";

interface ICarDetailProps {
  carId: string;
}

const CarDetail: FC<ICarDetailProps> = ({ carId }) => {
  const { back }: NextRouter = useRouter();
  const [modal, setModal] = useState(false);
  const [carDetail, setCarDetail] = useState<ICar>();

  useEffect(() => {
    async function fetchDetailCar() {
      try {
        const { data } = await axios.get(`${BaseUrl.URL}cars/details/${carId}`);
        setCarDetail(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetailCar();
  }, [carId]);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <Container imgUrl={`${BaseUrl.CLOUDINARY_IMAGE}/${carDetail?.file[0]}`}>
      <Heading>
        <h1>{carDetail?.name}</h1>
        <p>{carDetail?.description}</p>
        <SpeedBlock>
          <Block>
            <Image src="/power.png" alt="speed" width={20} height={30} />
            <p>{carDetail?.reserve} km</p>
            <span>power reserve</span>
          </Block>
          <Block>
            <Image src="/speed.png" alt="speed" width={30} height={20} />
            <p>{carDetail?.speed} km</p>
            <span>0-100 кm/h</span>
          </Block>
          {carDetail?.used && (
            <Block>
              <span>mileage</span>
              <p>{carDetail?.mileage} km</p>
            </Block>
          )}
        </SpeedBlock>
        <Block>
          <span>Price: {carDetail?.price} $</span>
        </Block>
      </Heading>
      {modal && <p>Form test drive</p>}
      <ButtonGroup>
        <Button onClick={showModal}>Test Drive</Button>
        <Button onClick={back}>Back</Button>
      </ButtonGroup>
    </Container>
  );
};

export default CarDetail;
