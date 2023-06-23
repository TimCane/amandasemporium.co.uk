import { farnborough } from '../_locations/farnborough.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const nancy: IBear = {
  Id: 'nancy',
  Name: 'Nancy',
  UploadedOn: new Date(2021, 9, 7),
  Type: BearType.BuildABear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2021, 8, 12),
  },
  Sold: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2021, 10, 20),
  },
};
