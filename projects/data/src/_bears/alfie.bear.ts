import { horley } from '../_locations/horley.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const alfie: IBear = {
  Id: 'alfie',
  Name: 'Alfie',
  Type: BearType.BuildABear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 4, 4),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2018, 4, 21),
  },
};
