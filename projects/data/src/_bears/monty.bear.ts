import { middleton } from '../_locations/middleton.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const monty: IBear = {
  Id: 'monty',
  Name: 'Monty',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2019, 7, 24),
  },
  Sold: null,
  Rehomed: {
    Location: middleton,
    Date: new Date(2019, 11, 7),
  },
};
