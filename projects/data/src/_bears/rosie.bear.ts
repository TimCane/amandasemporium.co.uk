import { wallingford } from '../_locations/wallingford.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rosie: IBear = {
  Id: 'rosie',
  Name: 'Rosie',
  Type: BearType.BearFactory,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 10, 13),
  },
  Sold: null,
  Rehomed: {
    Location: wallingford,
    Date: new Date(2018, 11, 11),
  },
};
