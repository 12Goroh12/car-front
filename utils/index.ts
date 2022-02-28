import { WebsiteUrls } from "./../types/enums/index";
import { ICategories } from "../types/categories";
import * as yup from "yup";
import { ICar } from "../types/cars";

export const categories: ICategories[] = [
  { id: 1, path: WebsiteUrls.NEW, name: "New" },
  { id: 2, path: WebsiteUrls.USED, name: "Used" },
  { id: 3, path: WebsiteUrls.NEW_ADN_USED, name: "New and Used" },
];

const requiredField = yup.string().required();

export const validationSchemaLogin = yup.object().shape({
  name: requiredField,
  password: requiredField,
  email: requiredField,
});

const requiredFieldNull = yup.string().required().min(3).nullable();

export const validationSchemaCreate = yup.object().shape({
  name: yup.string().required().min(3),
  description: yup.string().required().min(3).max(300),
  file: yup.mixed().required("You need to provide a file"),
  price: requiredFieldNull,
  speed: requiredFieldNull,
  reserve: requiredFieldNull,
  used: yup.bool().required(),
  mileage: yup.string().when("used", {
    is: (used: boolean) => used === true,
    then: yup.string().required().min(3).nullable(),
  }),
});

export const filterNewCars = (items: ICar[]) =>
  items.filter((car: ICar) => !car.used);

export const filterUsedCars = (items: ICar[]) =>
  items.filter((car: ICar) => car.used);

