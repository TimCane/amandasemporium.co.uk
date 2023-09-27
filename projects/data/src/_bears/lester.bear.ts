// lester.bear.ts
import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { monkey } from '../_bear-species/monkey.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { shepperton } from '../_locations/shepperton.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const lester: IBear = {
  Id: 'lester',
  Name: 'Lester',
  Description: '',
  UploadedOn: new Date(2023, 8, 27),
  Info: {
    Brand: buildABear,
    Species: monkey,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 3, 7),
  },
  Event: E20230923,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 8, 23),
  },
};
