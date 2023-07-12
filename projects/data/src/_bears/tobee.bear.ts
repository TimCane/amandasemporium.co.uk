import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20180610 } from '../_events/E2018-06-10.event';
import { maidenhead } from '../_locations/maidenhead.location';
import { southsea } from '../_locations/southsea.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const tobee: IBear = {
  Id: 'tobee',
  Name: 'Tobee',
  Description: ``,
  UploadedOn: new Date(2018, 5, 11),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Event: E20180610,
  Rehomed: {
    Location: maidenhead,
    Date: new Date(2018, 5, 10),
  },
};
