import { shepperton } from '../_locations/shepperton.location';
import { shrewsbury } from '../_locations/shrewsbury.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const william: IBear = {
  Id: 'william',
  Name: 'William',
  Type: BearType.WHSmithBear,
  Rescued: {
    Location: shrewsbury,
    Date: new Date(2018, 4, 18),
  },
  Sold: null,
  Rehomed: {
    Location: shepperton,
    Date: new Date(2018, 7, 15),
  },
};
