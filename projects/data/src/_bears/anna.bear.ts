import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20190921 } from '../_events/E2019-09-21.event';
import { farlington } from '../_locations/farlington.location';
import { godalming } from '../_locations/godalming.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const anna: IBear = {
  Id: 'anna',
  Name: 'Anna',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: farlington,
    Date: new Date(2019, 4, 25),
  },
  Event: E20190921,
  Rehomed: {
    Location: godalming,
    Date: new Date(2019, 8, 21),
  },
};
