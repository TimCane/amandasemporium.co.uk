import { E20191006 } from '../_events/E2019-10-06.event';
import { caterham } from '../_locations/caterham.location';
import { southsea } from '../_locations/southsea.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { unknown } from './_brands/unknown.bear-brand';
import { bear } from './_species/bear.bear-species';

export const mabel: IBear = {
  Id: 'mabel',
  Name: 'Mabel',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: unknown,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 8, 1),
  },
  Event: E20191006,
  Rehomed: {
    Location: caterham,
    Date: new Date(2019, 9, 6),
  },
};
