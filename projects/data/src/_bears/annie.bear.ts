import { oswestry } from '../_locations/oswestry.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const annie: IBear = {
  Id: 'annie',
  Name: 'Annie',
  UploadedOn: new Date(2019, 6, 18),
  Type: BearType.BuildABear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 4, 29),
  },
  Sold: null,
  Rehomed: {
    Location: oswestry,
    Date: new Date(2019, 9, 6),
  },
};
