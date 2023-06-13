import { chessington } from '../_locations/chessington.location';
import { chicester } from '../_locations/chicester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tess: IBear = {
  Id: 'tess',
  Name: 'Tess',
  Type: BearType.Morrisons,
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 10, 6),
  },
  Sold: null,
  Rehomed: {
    Location: chessington,
    Date: new Date(2021, 9, 25),
  },
};
