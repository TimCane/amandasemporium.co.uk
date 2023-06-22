import { london } from '../_locations/london.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sally: IBear = {
  Id: 'sally',
  Name: 'Sally',
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 10, 29),
  },
  Sold: null,
  Rehomed: {
    Location: london,
    Date: new Date(2022, 11, 10),
  },
};
