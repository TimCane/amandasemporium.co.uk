import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { addlestone } from '../_locations/addlestone.location';
import { weybridge } from '../_locations/weybridge.location';
import { andover } from '../_locations/andover.location';
import { E20240721 } from '../_events/E2024-07-21.event';

export const josie: IBear = {
  Id: 'josie',
  Name: 'Josie',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: weybridge,
    Date: new Date(2024, 1, 10),
  },
  Event: E20240721,
  Rehomed: {
    Date: new Date(2024,5,21),
    Location: andover
  },
};
