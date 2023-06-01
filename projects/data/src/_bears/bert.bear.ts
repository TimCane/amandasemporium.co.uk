import { farnborough } from '../_locations/farnborough.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bert: IBear = {
  Id: 'bert',
  Name: 'Bert',
  Type: BearType.BuildABear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 10, 18),
  },
  Sold: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2020, 2, 19),
  },
};
