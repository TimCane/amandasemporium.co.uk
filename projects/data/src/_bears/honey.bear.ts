import { haylingIsland } from '../_locations/haylingIsland.location';
import { odiham } from '../_locations/odiham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const honey: IBear = {
  Id: 'honey',
  Name: 'Honey',
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2022, 9, 23),
  },
  Sold: null,
  Rehomed: {
    Location: odiham,
    Date: new Date(2022, 11, 27),
  },
};
