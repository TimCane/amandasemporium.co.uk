import { birdham } from '../_locations/birdham.location';
import { chessington } from '../_locations/chessington.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bobby: IBear = {
  Id: 'bobby',
  Name: 'Bobby',
  Type: BearType.BuildABear,
  Rescued: {
    Location: birdham,
    Date: new Date(2019, 8, 24),
  },
  Sold: null,
  Rehomed: {
    Location: chessington,
    Date: new Date(2019, 9, 28),
  },
};
