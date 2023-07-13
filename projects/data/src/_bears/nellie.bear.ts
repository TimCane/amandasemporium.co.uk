import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20220820 } from '../_events/E2022-08-20.event';
import { camberley } from '../_locations/camberley.location';
import { farnham } from '../_locations/farnham.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const nellie: IBear = {
  Id: 'nellie',
  Name: 'Nellie',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: camberley,
    Date: new Date(2022, 1, 12),
  },
  Event: E20220820,
  Rehomed: {
    Location: farnham,
    Date: new Date(2022, 7, 20),
  },
};
