export default interface IProduct {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  inCart: boolean;
  count: number;
  total: number;
}
