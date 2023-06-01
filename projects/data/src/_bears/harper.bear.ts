import { chessington } from '../_locations/chessington.location';
import { selsey } from '../_locations/selsey.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const harper: IBear = {
  Id: 'harper',
  Name: 'Harper',
  Type: BearType.BuildABear,
  Rescued: {
    Location: selsey,
    Date: new Date(2022, 5, 28),
  },
  Sold: null,
  Rehomed: {
    Location: chessington,
    Date: new Date(2022, 9, 24),
  },
};
