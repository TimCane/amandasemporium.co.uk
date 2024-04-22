import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { addlestone } from '../_locations/addlestone.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const theodore: IBear = {
  Id: 'theodore',
  Name: 'Theodore',
  Description: ``,
  UploadedOn: new Date(2024, 3, 22),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 10, 2),
  },
  Event: null,
  Rehomed: null,
};
