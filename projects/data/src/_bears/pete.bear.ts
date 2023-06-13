import { chessington } from '../_locations/chessington.location';
import { cobham } from '../_locations/cobham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const pete: IBear = {
  Id: 'pete',
  Name: 'Pete',
  Type: BearType.BuildABear,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 12, 5),
  },
  Sold: null,
  Rehomed: {
    Location: chessington,
    Date: new Date(2021, 9, 25),
  },
};
