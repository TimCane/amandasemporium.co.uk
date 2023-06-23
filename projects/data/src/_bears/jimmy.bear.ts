import { bourneEnd } from '../_locations/bourneEnd.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jimmy: IBear = {
  Id: 'jimmy',
  Name: 'Jimmy',
  UploadedOn: new Date(2019, 3, 7),
  Type: BearType.BearFactory,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 1, 17),
  },
  Sold: null,
  Rehomed: {
    Location: bourneEnd,
    Date: new Date(2019, 4, 13),
  },
};
