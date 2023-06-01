import { blackwater } from '../_locations/blackwater.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ariel: IBear = {
  Id: 'ariel',
  Name: 'Ariel',
  Type: BearType.BuildABear,
  Rescued: {
    Location: blackwater,
    Date: new Date(2022, 1, 29),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 4, 23),
  },
};
