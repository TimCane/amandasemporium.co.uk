import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20221210 } from '../_events/E2022-12-10.event';
import { horley } from '../_locations/horley.location';
import { portsmouth } from '../_locations/portsmouth.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const berry: IBear = {
  Id: 'berry',
  Name: 'Benny',
  Description: ``,
  UploadedOn: new Date(2022, 11, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: portsmouth,
    Date: new Date(2020, 1, 10),
  },
  Event: E20221210,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 11, 10),
  },
};
