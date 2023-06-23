import { byfleet } from '../_locations/byfleet.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jamie: IBear = {
  Id: 'jamie',
  Name: 'Jamie',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 10, 13),
  },
  Sold: null,
  Rehomed: {
    Location: byfleet,
    Date: new Date(2018, 11, 22),
  },
};
