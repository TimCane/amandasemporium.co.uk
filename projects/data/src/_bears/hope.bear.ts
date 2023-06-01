import { camberley } from '../_locations/camberley.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hope: IBear = {
  Id: 'hope',
  Name: 'Hope',
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 7, 7),
  },
  Sold: null,
  Rehomed: {
    Location: camberley,
    Date: new Date(2018, 11, 17),
  },
};
