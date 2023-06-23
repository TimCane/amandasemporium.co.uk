import { chessington } from '../_locations/chessington.location';
import { ely } from '../_locations/ely.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const grayson: IBear = {
  Id: 'grayson',
  Name: 'Grayson',
  UploadedOn: new Date(2022, 3, 24),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ely,
    Date: new Date(2021, 7, 19),
  },
  Sold: null,
  Rehomed: {
    Location: chessington,
    Date: new Date(2022, 8, 24),
  },
};
