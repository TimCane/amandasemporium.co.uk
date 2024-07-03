import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { addlestone } from '../_locations/addlestone.location';
import { cranleigh } from '../_locations/cranleigh.location';
import { E20240629 } from '../_events/E2024-06-29.event';

export const kathy: IBear = {
  Id: 'kathy',
  Name: 'Kathy',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
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
    Location: cranleigh,
    Date: new Date(2024,5,29)
  },
};
