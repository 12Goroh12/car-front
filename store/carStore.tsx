import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ICar } from "../types/cars";
import { BaseUrl, KeyCloudinary } from "../types/enums";

class Cars {
  popup: boolean = false;
  isLoading: boolean = false;
  cars: ICar[] = [];
  car: ICar = {
    name: "",
    price: null,
    description: "",
    speed: null,
    reserve: null,
    used: false,
    file: [],
    _id: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(payload: boolean) {
    this.isLoading = payload;
  }

  async getCarsInStore() {
    try {
      this.setLoading(true);
      const response = await axios.get(`${BaseUrl.URL}cars/get`);
      this.cars = [...response.data];
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  }

  addCarInStore = async (values: ICar) => {
    try {
      const formData = new FormData();
      formData.append("file", values.file[0]);
      formData.append("upload_preset", KeyCloudinary.KEY);

      await axios
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
            .then((response) => {
              this.setCarsInStore(response.data.newCar);
              console.log(response.data);
            });
        })
        .catch(({ response }) => console.log(response.error));
    } catch (error) {
      console.log(error);
    }
  };

  setCarsInStore = (car: ICar) => {
    this.cars.push(car);
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
