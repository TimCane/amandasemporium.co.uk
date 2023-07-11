import { E20190413 } from '../_events/E2019-04-13.event';
import { hurley } from '../_locations/hurley.location';
import { weybridge } from '../_locations/weybridge.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { unknown } from './_brands/unknown.bear-brand';
import { bear } from './_species/bear.bear-species';

export const clark: IBear = {
  Id: 'clark',
  Name: 'Clark',
  Description: ``,
  UploadedOn: new Date(2019, 3, 7),
  Info: {
    Brand: unknown,
    Species: bear,
  },
  Rescued: {
    Location: weybridge,
    Date: new Date(2018, 11, 20),
  },
  Event: E20190413,
  Rehomed: {
    Location: hurley,
    Date: new Date(2019, 3, 13),
  },
};
