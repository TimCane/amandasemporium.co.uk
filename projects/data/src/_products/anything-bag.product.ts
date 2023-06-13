import { IProduct } from '../lib/interfaces/product.interface';

export const anythingBag: IProduct = {
  Id: 'anything-bag',
  Name: 'Anything Bag',
  Description:
    'Traditionally known as a Drawstring bag. The Anything Bag is exactly that. Good for anything!',
  Price: 4.0,
  Hidden: true,
  Images: ['/assets/images/products/anything-bag.jpg'],
};
