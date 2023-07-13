import { keelTeddy } from '../_bear-brands/keel-teddy.bear-brand';
import { E20181110 } from '../_events/E2018-11-10.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { reading } from '../_locations/reading.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const clara: IBear = {
  Id: 'clara',
  Name: 'Clara',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: keelTeddy,
    Species: bear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181110,
  Rehomed: {
    Location: reading,
    Date: new Date(2018, 10, 10),
  },
};
