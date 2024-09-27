import { IProduct } from '../lib/interfaces/product.interface';

export const bookmarks: IProduct = {
  Id: 'bookmarks',
  Name: 'Bookmarks',
  Description: 'A set of 3 handmade fabric bookmarks',
  Price: 5.0,
  Hidden: false,
  Images: ['/assets/images/products/bookmarks.jpg'],
  Order: 1,
};
