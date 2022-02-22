export interface ICar {
  name: string;
  price: number;
  description: string;
  speed: number;
  reserve: number;
  used: boolean;
  mileage?: number;
  file: string[];
}
