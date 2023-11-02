import { IProduct } from '../lib/interfaces/product.interface';

export const toothPocket: IProduct = {
  Id: 'tooth-pocket',
  Name: 'Tooth Pocket',
  Description:
    'Keep little teeth safe in a felt tooth pocket so the fairies can find them.',
  Price: 2.0,
  Hidden: true,
  Images: ['/assets/images/products/tooth-pocket.jpg'],
  Order: 1,
};
