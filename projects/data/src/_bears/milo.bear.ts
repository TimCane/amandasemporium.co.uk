import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20180929 } from '../_events/E2018-09-29.event';
import { durham } from '../_locations/durham.location';
import { shepperton } from '../_locations/shepperton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const milo: IBear = {
  Id: 'milo',
  Name: 'Milo',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Event: E20180929,
  Rehomed: {
    Location: durham,
    Date: new Date(2018, 8, 29),
  },
};
