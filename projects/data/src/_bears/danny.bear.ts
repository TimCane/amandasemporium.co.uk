import { chippenham } from '../_locations/chippenham.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const danny: IBear = {
  Id: 'danny',
  Name: 'Danny',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2019, 7, 24),
  },
  Sold: null,
  Rehomed: {
    Location: chippenham,
    Date: new Date(2019, 8, 21),
  },
};
