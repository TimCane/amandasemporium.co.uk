import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { peterborough } from '../_locations/peterborough.location';
import { rabbit } from '../_species/rabbit.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const greta: IBear = {
  Id: 'greta',
  Name: 'Greta',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: peterborough,
    Date: new Date(2023, 4, 1),
  },
  Event: null,
  Rehomed: null,
};
