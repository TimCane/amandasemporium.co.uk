import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { chertsey } from '../_locations/chertsey.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const cobey: IBear = {
  Id: 'cobey',
  Name: 'Cobey',
  Description: ``,
  UploadedOn: new Date(2022, 10, 8),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2020, 5, 1),
  },
  Event: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 6, 21),
  },
};
