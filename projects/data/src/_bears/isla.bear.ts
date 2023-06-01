import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isla: IBear = {
  Id: 'isla',
  Name: 'Isla',
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 10, 29),
  },
  Sold: null,
  Rehomed: null,
};
