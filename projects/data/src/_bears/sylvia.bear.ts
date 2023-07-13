import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20221120 } from '../_events/E2022-11-20.event';
import { andover } from '../_locations/andover.location';
import { pagham } from '../_locations/pagham.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const sylvia: IBear = {
  Id: 'sylvia',
  Name: 'Sylvia',
  Description: ``,
  UploadedOn: new Date(2022, 10, 8),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: pagham,
    Date: new Date(2022, 8, 17),
  },
  Event: E20221120,
  Rehomed: {
    Location: andover,
    Date: new Date(2022, 10, 20),
  },
};
