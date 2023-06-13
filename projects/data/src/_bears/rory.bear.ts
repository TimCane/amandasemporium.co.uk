import { normandy } from '../_locations/normandy.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rory: IBear = {
  Id: 'rory',
  Name: 'Rory',
  Type: BearType.BuildABear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 10, 13),
  },
  Sold: null,
  Rehomed: {
    Location: normandy,
    Date: new Date(2018, 11, 17),
  },
};
