export interface ICar {
  name: string;
  price: number | null;
  description: string;
  speed: number | null;
  reserve: number | null;
  used: boolean;
  mileage?: number | null;
  file: File[] | string[];
  _id: string;
}
