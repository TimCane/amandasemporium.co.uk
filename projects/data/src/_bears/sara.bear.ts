import { chessington } from '../_locations/chessington.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sara: IBear = {
  Id: 'sara',
  Name: 'Sara',
  UploadedOn: new Date(2019, 6, 18),
  Type: BearType.BuildABear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 5, 29),
  },
  Sold: null,
  Rehomed: {
    Location: chessington,
    Date: new Date(2019, 9, 28),
  },
};
