// kal.bear.ts
import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { addlestone } from '../_locations/addlestone.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { bear } from './bear.bear';

export const kal: IBear = {
  Id: 'kal',
  Name: 'Kal',
  Description: '',
  UploadedOn: new Date(2023, 8, 27),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 8, 20),
  },
  Event: null,
  Rehomed: null,
};
