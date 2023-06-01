import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { wisley } from '../_locations/wisley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jack: IBear = {
  Id: 'jack',
  Name: 'Jack',
  Type: BearType.GloriousBritainJointedBear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 4, 18),
  },
  Sold: null,
  Rehomed: {
    Location: wisley,
    Date: new Date(2018, 12, 2),
  },
};
