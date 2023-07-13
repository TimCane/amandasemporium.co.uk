import { keelTeddy } from '../_bear-brands/keel-teddy.bear-brand';
import { E20190817 } from '../_events/E2019-08-17.event';
import { basingstoke } from '../_locations/basingstoke.location';
import { weybridge } from '../_locations/weybridge.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const bessie: IBear = {
  Id: 'bessie',
  Name: 'Bessie',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: keelTeddy,
    Species: bear,
  },
  Rescued: {
    Location: weybridge,
    Date: new Date(2019, 1, 23),
  },
  Event: E20190817,
  Rehomed: {
    Location: basingstoke,
    Date: new Date(2019, 7, 17),
  },
};
