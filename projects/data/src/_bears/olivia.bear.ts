import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20190921 } from '../_events/E2019-09-21.event';
import { shepperton } from '../_locations/shepperton.location';
import { yateley } from '../_locations/yateley.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const olivia: IBear = {
  Id: 'olivia',
  Name: 'Olivia',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2019, 7, 24),
  },
  Event: E20190921,
  Rehomed: {
    Location: yateley,
    Date: new Date(2019, 8, 21),
  },
};
