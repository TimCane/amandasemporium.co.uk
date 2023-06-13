import { chessington } from '../_locations/chessington.location';
import { ely } from '../_locations/ely.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const grayson: IBear = {
  Id: 'grayson',
  Name: 'Grayson',
  Type: BearType.BuildABear,
  Rescued: {
    Location: ely,
    Date: new Date(2021, 8, 19),
  },
  Sold: null,
  Rehomed: {
    Location: chessington,
    Date: new Date(2022, 9, 24),
  },
};
