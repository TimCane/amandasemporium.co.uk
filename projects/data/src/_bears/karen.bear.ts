import { unknown } from '../_brands/unknown.bear-brand';
import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { stilton } from '../_locations/stilton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const karen: IBear = {
  Id: 'karen',
  Name: 'Karen',
  Description: ``,
  UploadedOn: new Date(2019, 1, 25),
  Info: {
    Brand: unknown,
    Species: bear,
  },
  Rescued: {
    Location: bexhillOnSea,
    Date: new Date(2019, 8, 14),
  },
  Event: null,
  Rehomed: {
    Location: stilton,
    Date: new Date(2020, 1, 16),
  },
};
