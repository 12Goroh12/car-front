import { WebsiteUrls } from "./../types/enums/index";
import { ICategories } from "../types/categories";

export const categories: ICategories[] = [
  { id: 1, path: WebsiteUrls.NEW, name: "New" },
  { id: 2, path: WebsiteUrls.USED, name: "Used" },
  { id: 3, path: WebsiteUrls.NEW_ADN_USED, name: "New and Used" },
];
