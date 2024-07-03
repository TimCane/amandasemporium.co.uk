import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { addlestone } from '../_locations/addlestone.location';
import { newbury } from '../_locations/newbury.location';
import { E20240630 } from '../_events/E2024-06-30.event';

export const dexter: IBear = {
  Id: 'dexter',
  Name: 'Dexter',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2024, 1, 26),
  },
  Event: E20240630,
  Rehomed: {
    Location: newbury,
    Date: new Date(2024,5,30)
  }
};
