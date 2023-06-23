import { hook } from '../_locations/hook.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const maya: IBear = {
  Id: 'maya',
  Name: 'Maya',
  UploadedOn: new Date(2019, 10, 22),
  Type: BearType.BuildABear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 9, 18),
  },
  Sold: null,
  Rehomed: {
    Location: hook,
    Date: new Date(2022, 10, 27),
  },
};
