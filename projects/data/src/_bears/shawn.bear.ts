import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { chertsey } from '../_locations/chertsey.location';

export const shawn: IBear = {
  Id: 'shawn',
  Name: 'Shawn',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2023, 10, 1),
  },
  Event: null,
  Rehomed: null
};
