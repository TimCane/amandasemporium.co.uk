import { shepperton } from '../_locations/shepperton.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const grace: IBear = {
  Id: 'grace',
  Name: 'Grace',
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 9, 8),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2018, 9, 29),
  },
};
