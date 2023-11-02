// cam.bear.ts
import { unknown } from '../_bear-brands/unknown.bear-brand';
import { cat } from '../_bear-species/cat.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { surbiton } from '../_locations/surbiton.location';
import { westWittering } from '../_locations/westWittering.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const cam: IBear = {
  Id: 'cam',
  Name: 'Cam',
  Description: '',
  UploadedOn: new Date(2023, 8, 27),
  Info: {
    Brand: unknown,
    Species: cat,
  },
  Rescued: {
    Location: westWittering,
    Date: new Date(2023, 8, 3),
  },
  Event: E20230923,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 8, 23),
  },
};
