import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { addlestone } from '../_locations/addlestone.location';
import { rabbit } from '../_bear-species/rabbit.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const luna: IBear = {
  Id: 'luna',
  Name: 'Luna',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Event: null,
  Rehomed: null,
};
