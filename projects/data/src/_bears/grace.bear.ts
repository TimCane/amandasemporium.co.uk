import { E20180929 } from '../_events/E2018-09-29.event';
import { shepperton } from '../_locations/shepperton.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const grace: IBear = {
  Id: 'grace',
  Name: 'Grace',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
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
