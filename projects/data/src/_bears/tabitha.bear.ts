import { berrylands } from '../_locations/berrylands.location';
import { westWittering } from '../_locations/westWittering.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tabitha: IBear = {
  Id: 'tabitha',
  Name: 'Tabitha',
  UploadedOn: new Date(2022, 8, 26),
  Type: BearType.BuildABear,
  Rescued: {
    Location: westWittering,
    Date: new Date(2022, 8, 27),
  },
  Sold: null,
  Rehomed: {
    Location: berrylands,
    Date: new Date(2022, 9, 24),
  },
};
