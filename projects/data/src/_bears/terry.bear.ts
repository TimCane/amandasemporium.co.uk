import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20200510 } from '../_events/E2020-05-10.event';
import { romsey } from '../_locations/romsey.location';
import { woking } from '../_locations/woking.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const terry: IBear = {
  Id: 'terry',
  Name: 'Terry',
  Description: ``,
  UploadedOn: new Date(2019, 4, 24),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: romsey,
    Date: new Date(2019, 7, 2),
  },
  Event: E20200510,
  Rehomed: {
    Location: woking,
    Date: new Date(2020, 4, 10),
  },
};
