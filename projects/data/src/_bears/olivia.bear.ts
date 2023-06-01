import { shepperton } from '../_locations/shepperton.location';
import { yateley } from '../_locations/yateley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const olivia: IBear = {
  Id: 'olivia',
  Name: 'Olivia',
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2019, 8, 24),
  },
  Sold: null,
  Rehomed: {
    Location: yateley,
    Date: new Date(2019, 9, 21),
  },
};
