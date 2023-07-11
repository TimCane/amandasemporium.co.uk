import { E20180929 } from '../_events/E2018-09-29.event';
import { shepperton } from '../_locations/shepperton.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const grace: IBear = {
  Id: 'grace',
  Name: 'Grace',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Event: E20180929,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2018, 8, 29),
  },
};
