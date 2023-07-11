import { middleton } from '../_locations/middleton.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const monty: IBear = {
  Id: 'monty',
  Name: 'Monty',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2019, 7, 24),
  },
  Event: null,
  Rehomed: {
    Location: middleton,
    Date: new Date(2019, 11, 7),
  },
};
