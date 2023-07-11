import { E20190817 } from '../_events/E2019-08-17.event';
import { farnborough } from '../_locations/farnborough.location';
import { ripley } from '../_locations/ripley.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const ollie: IBear = {
  Id: 'ollie',
  Name: 'Ollie',
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
  Event: E20190817,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2019, 7, 17),
  },
};
