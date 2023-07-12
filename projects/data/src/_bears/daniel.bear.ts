import { lBILtd } from '../_brands/lbi-ltd.bear-brand';
import { shepperton } from '../_locations/shepperton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const daniel: IBear = {
  Id: 'daniel',
  Name: 'Daniel',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: lBILtd,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 6, 1),
  },
  Event: null,
  Rehomed: null,
};
