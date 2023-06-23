import { horley } from '../_locations/horley.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mia: IBear = {
  Id: 'mia',
  Name: 'Mia',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.BabyGund,
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 11, 14),
  },
};
