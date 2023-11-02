import { lbiLtd } from '../_bear-brands/lbi-ltd.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { shepperton } from '../_locations/shepperton.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const daniel: IBear = {
  Id: 'daniel',
  Name: 'Daniel',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: lbiLtd,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 6, 1),
  },
  Event: E20230923,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 8, 23),
  },
};
