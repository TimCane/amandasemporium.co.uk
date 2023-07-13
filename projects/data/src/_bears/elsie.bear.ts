import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20180929 } from '../_events/E2018-09-29.event';
import { ripley } from '../_locations/ripley.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const elsie: IBear = {
  Id: 'elsie',
  Name: 'Elsie',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 5, 10),
  },
  Event: E20180929,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2018, 8, 29),
  },
};
