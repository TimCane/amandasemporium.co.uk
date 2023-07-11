import { E20190525 } from '../_events/E2019-05-25.event';
import { burnham } from '../_locations/burnham.location';
import { portsmouth } from '../_locations/portsmouth.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const lottie: IBear = {
  Id: 'lottie',
  Name: 'Lottie',
  Description: ``,
  UploadedOn: new Date(2019, 4, 27),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: portsmouth,
    Date: new Date(2019, 4, 19),
  },
  Event: E20190525,
  Rehomed: {
    Location: burnham,
    Date: new Date(2019, 4, 25),
  },
};
