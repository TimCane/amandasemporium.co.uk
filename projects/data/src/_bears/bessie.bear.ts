import { E20190817 } from '../_events/E2019-08-17.event';
import { basingstoke } from '../_locations/basingstoke.location';
import { weybridge } from '../_locations/weybridge.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { keelTeddy } from './_brands/keel-teddy.bear-brand';
import { bear } from './_species/bear.bear-species';

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
