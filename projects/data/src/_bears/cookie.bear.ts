import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20191006 } from '../_events/E2019-10-06.event';
import { billingshurst } from '../_locations/billingshurst.location';
import { chicester } from '../_locations/chicester.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const cookie: IBear = {
  Id: 'cookie',
  Name: 'Cookie',
  Description: ``,
  UploadedOn: new Date(2019, 9, 7),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 7, 3),
  },
  Event: E20191006,
  Rehomed: {
    Location: billingshurst,
    Date: new Date(2019, 9, 6),
  },
};
