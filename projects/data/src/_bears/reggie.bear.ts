import { E20181110 } from '../_events/E2018-11-10.event';
import { reading } from '../_locations/reading.location';
import { southsea } from '../_locations/southsea.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const reggie: IBear = {
  Id: 'reggie',
  Name: 'Reggie',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 8, 2),
  },
  Event: E20181110,
  Rehomed: {
    Location: reading,
    Date: new Date(2018, 10, 10),
  },
};
