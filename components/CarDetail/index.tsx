import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Container } from "../../styles/carDetail";
import { ICar } from "../../types/cars";
import { BaseUrl } from "../../types/enums";

interface ICarDetailProps {
  carId: string;
}

const CarDetail: FC<ICarDetailProps> = ({ carId }) => {
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

  return (
    <Container imgUrl={`${BaseUrl.CLOUDINARY_IMAGE}/${carDetail?.file[0]}`}>
      {/* there will be content */}
      <h1>{carDetail?.name}</h1>
    </Container>
  );
};

export default CarDetail;
