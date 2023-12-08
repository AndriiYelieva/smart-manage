type Price = {
  value: number;
  symbol: string;
  isDefault?: number;
}

export type Product = {
  id: number;
  name: string;
  serialNumber: number;
  photo: string;
  title: string;
  type: string;
  price: Price[],
  order: number;
  date: string;
}