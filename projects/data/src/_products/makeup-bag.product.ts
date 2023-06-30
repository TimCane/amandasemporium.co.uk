import { IProduct } from '../lib/interfaces/product.interface';

export const makeupBag: IProduct = {
  Id: 'makeup-bag',
  Name: 'Makeup bag',
  Description:
    'A spacious single compartment zip-up makeup bag with matching reuseable face pads',
  Price: 8.0,
  Hidden: false,
  Images: ['/assets/images/products/makeup-bag.jpg'],
  Order: 1,
};
