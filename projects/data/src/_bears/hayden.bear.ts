import { E20190928 } from '../_events/E2019-09-28.event';
import { farnham } from '../_locations/farnham.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const hayden: IBear = {
  Id: 'hayden',
  Name: 'Hayden',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: farnham,
    Date: new Date(2019, 3, 13),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
