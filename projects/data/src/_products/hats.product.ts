import { IProduct } from '../lib/interfaces/product.interface';

export const hats: IProduct = {
  Id: 'hats',
  Name: 'Hats',
  Description:
    'A variety of knitted and crocheted hats for babies and toddlers.',
  Price: 4.0,
  Hidden: false,
  Images: ['/assets/images/products/hats.jpg'],
  Order: 1,
};
