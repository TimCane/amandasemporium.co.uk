import { middleton } from '../_locations/middleton.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const monty: IBear = {
  Id: 'monty',
  Name: 'Monty',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
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
