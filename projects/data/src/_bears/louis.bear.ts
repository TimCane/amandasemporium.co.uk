import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { reading } from '../_locations/reading.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const louis: IBear = {
  Id: 'louis',
  Name: 'Louis',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: reading,
    Date: new Date(2019, 6, 28),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
