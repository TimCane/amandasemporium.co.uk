import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20240629 } from '../_events/E2024-06-29.event';
import { addlestone } from '../_locations/addlestone.location';
import { godalming } from '../_locations/godalming.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const kane: IBear = {
  Id: 'kane',
  Name: 'Kane',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 9, 1),
  },
  Event: E20240629,
  Rehomed: {
    Location: godalming,
    Date: new Date(2024,5,29)
  },
};
