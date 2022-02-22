import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ICar } from "../types/cars";
import { BaseUrl, KeyCloudinary } from "../types/enums";

class Cars {
  popup: boolean = false;
  cars: ICar[] = [];
  car: ICar = {
    name: "",
    price: 0,
    description: "",
    speed: 0,
    reserve: 0,
    used: false,
    mileage: 0,
    file: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  addCarInStore = (values: ICar) => {
    try {
      const formData = new FormData();
      formData.append("file", values.file[0]);
      formData.append("upload_preset", KeyCloudinary.KEY);

      axios
        .post(BaseUrl.CLOUDINARY, formData)
        .then((response) => {
          const fileName = response.data.public_id;

          axios
            .post(`${BaseUrl.URL}cars/create`, {
              name: values.name,
              price: values.price,
              description: values.description,
              file: [fileName],
              used: values.used,
              speed: values.speed,
              reserve: values.reserve,
              mileage: values.mileage,
            })
            .then((response) => console.log(response.data));
        })
        .catch(({ response }) => console.log(response.error));
    } catch (error) {
      console.log(error);
    }
  };

  togglePopup() {
    this.popup = !this.popup;
  }

  hidePopup() {
    this.popup = false;
  }
}

const carStore = new Cars();

export default carStore;
