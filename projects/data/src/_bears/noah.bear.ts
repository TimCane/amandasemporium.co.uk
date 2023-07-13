import { keelTeddy } from '../_bear-brands/keel-teddy.bear-brand';
import { E20191006 } from '../_events/E2019-10-06.event';
import { ashford } from '../_locations/ashford.location';
import { broadbridgeHeath } from '../_locations/broadbridgeHeath.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const noah: IBear = {
  Id: 'noah',
  Name: 'Noah',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: keelTeddy,
    Species: bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 7, 21),
  },
  Event: E20191006,
  Rehomed: {
    Location: broadbridgeHeath,
    Date: new Date(2019, 9, 6),
  },
};
