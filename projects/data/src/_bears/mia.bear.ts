import { babyGund } from '../_bear-brands/baby-gund.bear-brand';
import { E20191214 } from '../_events/E2019-12-14.event';
import { horley } from '../_locations/horley.location';
import { shepperton } from '../_locations/shepperton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const mia: IBear = {
  Id: 'mia',
  Name: 'Mia',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: babyGund,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Event: E20191214,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 11, 14),
  },
};
