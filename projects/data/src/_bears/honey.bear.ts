import { E20221127 } from '../_events/E2022-11-27.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { odiham } from '../_locations/odiham.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { rabbit } from './_species/rabbit.bear-species';

export const honey: IBear = {
  Id: 'honey',
  Name: 'Honey',
  Description: ``,
  UploadedOn: new Date(2022, 10, 8),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2022, 8, 23),
  },
  Event: E20221127,
  Rehomed: {
    Location: odiham,
    Date: new Date(2022, 10, 27),
  },
};
