import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20181208 } from '../_events/E2018-12-08.event';
import { egham } from '../_locations/egham.location';
import { horley } from '../_locations/horley.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const noel: IBear = {
  Id: 'noel',
  Name: 'Noel',
  Description: ``,
  UploadedOn: new Date(2018, 11, 3),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: egham,
    Date: new Date(2018, 10, 26),
  },
  Event: E20181208,
  Rehomed: {
    Location: horley,
    Date: new Date(2018, 11, 8),
  },
};
