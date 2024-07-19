import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { westWittering } from '../_locations/westWittering.location';

export const esme: IBear = {
  Id: 'esme',
  Name: 'Esme',
  Description: ``,
  UploadedOn: new Date(2024, 6, 19),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: westWittering,
    Date: new Date(2023, 5, 9),
  },
  Event: null,
  Rehomed: null,
};
