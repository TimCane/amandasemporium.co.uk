import { ruislip } from '../_locations/ruislip.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const roger: IBear = {
  Id: 'roger',
  Name: 'Roger',
  Type: BearType.BuildABear,
  Rescued: {
    Location: ruislip,
    Date: new Date(2022, 9, 17),
  },
  Sold: null,
  Rehomed: null,
};
