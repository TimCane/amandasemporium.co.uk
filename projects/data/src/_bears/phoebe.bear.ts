import { unknown } from '../_bear-brands/unknown.bear-brand';
import { E20181202 } from '../_events/E2018-12-02.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { send } from '../_locations/send.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const phoebe: IBear = {
  Id: 'phoebe',
  Name: 'Phoebe',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: unknown,
    Species: bear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 6, 7),
  },
  Event: E20181202,
  Rehomed: {
    Location: send,
    Date: new Date(2018, 11, 2),
  },
};
