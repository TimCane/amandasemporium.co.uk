import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20191006 } from '../_events/E2019-10-06.event';
import { billingshurst } from '../_locations/billingshurst.location';
import { southsea } from '../_locations/southsea.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const david: IBear = {
  Id: 'david',
  Name: 'David',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 5, 2),
  },
  Event: E20191006,
  Rehomed: {
    Location: billingshurst,
    Date: new Date(2019, 9, 6),
  },
};
