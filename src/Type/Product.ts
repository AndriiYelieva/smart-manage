type Price = {
  value: number;
  symbol: string;
  isDefault?: number;
}

type Guarantee = {
  start: string;
  end: string;
}

export type Product = {
  id: number;
  name: string;
  serialNumber: number;
  photo: string;
  title: string;
  type: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
  specification: string;
}