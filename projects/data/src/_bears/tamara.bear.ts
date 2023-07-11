import { bridgemary } from '../_locations/bridgemary.location';
import { cove } from '../_locations/cove.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const tamara: IBear = {
  Id: 'tamara',
  Name: 'Tamara',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 5, 2),
  },
  Event: null,
  Rehomed: {
    Location: cove,
    Date: new Date(2019, 6, 7),
  },
};
