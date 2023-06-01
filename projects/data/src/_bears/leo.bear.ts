import { shepperton } from '../_locations/shepperton.location';
import { surbitonNurseySchool } from '../_locations/surbitonNurseySchool.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const leo: IBear = {
  Id: 'leo',
  Name: 'Leo',
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 9, 8),
  },
  Sold: null,
  Rehomed: {
    Location: surbitonNurseySchool,
    Date: new Date(2018, 9, 29),
  },
};
