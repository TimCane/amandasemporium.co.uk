import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { addlestone } from '../_locations/addlestone.location';

export const fuchsia: IBear = {
  Id: 'fuchsia',
  Name: 'Fuchsia',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 10, 2),
  },
  Event: null,
  Rehomed: null
};
