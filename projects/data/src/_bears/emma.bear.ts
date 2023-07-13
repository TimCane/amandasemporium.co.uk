import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20200304 } from '../_events/E2020-03-04.event';
import { weybridge } from '../_locations/weybridge.location';
import { woking } from '../_locations/woking.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const emma: IBear = {
  Id: 'emma',
  Name: 'Emma',
  Description: ``,
  UploadedOn: new Date(2018, 10, 24),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: weybridge,
    Date: new Date(2018, 10, 1),
  },
  Event: E20200304,
  Rehomed: {
    Location: woking,
    Date: new Date(2020, 2, 4),
  },
};
