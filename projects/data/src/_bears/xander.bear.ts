import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import {  worksop } from '../_locations/worksop.location';

export const xander: IBear = {
  Id: 'xander',
  Name: 'Xander',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: worksop,
    Date: new Date(2023, 6, 16),
  },
  Event: null,
  Rehomed: null
};
