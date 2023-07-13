import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20190921 } from '../_events/E2019-09-21.event';
import { godalming } from '../_locations/godalming.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const frank: IBear = {
  Id: 'frank',
  Name: 'Frank',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 7, 26),
  },
  Event: E20190921,
  Rehomed: {
    Location: godalming,
    Date: new Date(2019, 8, 21),
  },
};
