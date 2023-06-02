import { IProduct } from '../lib/interfaces/product.interface';

export const babyBag: IProduct = {
  Id: 'baby-bag',
  Name: 'Baby Bag',
  Description:
    'Handmade fabric baby bag with pockets inside. Comes with matching changing mat and burp cloth.',
  Price: 18.0,
  Hidden: true,
  Images: ['/assets/images/products/baby-bag.jpg'],
};
