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
import { BaseUrl, Roles, WebsiteUrls } from "../../types/enums";
import Image from "next/image";
import Modal from "../Modal";
import CarEdit from "../CarEdit";
import carStore from "../../store/carStore";
import { observer } from "mobx-react-lite";

interface ICarDetailProps {
  carId: string;
}

const CarDetail: FC<ICarDetailProps> = observer(({ carId }) => {
  const router: NextRouter = useRouter();
  let user;
  const { back }: NextRouter = useRouter();
  const [modal, setModal] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [carDetail, setCarDetail] = useState<ICar>();
  const [hasMounted, setHasMounted] = useState(false);

  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user") || "null");
  }

  useEffect(() => {
    setHasMounted(true);
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

  if (!hasMounted) {
    return null;
  }

  const showModal = () => {
    setModal(!modal);
  };

  const showEdit = () => {
    setEditForm(!editForm);
  };

  const removeCar = async () => {
    carStore.deleteCar(carId);
    setTimeout(() => {
      router.push(WebsiteUrls.NEW_ADN_USED);
    }, 1000);
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
      {editForm && <CarEdit setEditForm={setEditForm} carId={carId} />}
      {modal && <Modal setModal={setModal} />}
      <ButtonGroup>
        {user?.roles[0] === Roles.ADMIN && (
          <>
            <Button onClick={removeCar}>Delete Car</Button>
            <Button onClick={showEdit}>Edit</Button>
          </>
        )}
        <Button onClick={showModal}>Test Drive</Button>
        <Button onClick={back}>Back</Button>
      </ButtonGroup>
    </Container>
  );
});

export default CarDetail;
