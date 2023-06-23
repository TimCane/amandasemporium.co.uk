import { shepperton } from '../_locations/shepperton.location';
import { shrewsbury } from '../_locations/shrewsbury.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const william: IBear = {
  Id: 'william',
  Name: 'William',
  UploadedOn: new Date(2018, 3, 29),
  Type: BearType.WHSmithBear,
  Rescued: {
    Location: shrewsbury,
    Date: new Date(2018, 3, 18),
  },
  Sold: null,
  Rehomed: {
    Location: shepperton,
    Date: new Date(2018, 6, 15),
  },
};
