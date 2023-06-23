import { shepperton } from '../_locations/shepperton.location';
import { theale } from '../_locations/theale.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const winny: IBear = {
  Id: 'winny',
  Name: 'Winny',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Sold: null,
  Rehomed: {
    Location: theale,
    Date: new Date(2018, 10, 9),
  },
};
