import { shepperton } from '../_locations/shepperton.location';
import { shrewsbury } from '../_locations/shrewsbury.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const william: IBear = {
  Id: 'william',
  Name: 'William',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: BearBrandEnum.WHSmithBear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: shrewsbury,
    Date: new Date(2018, 3, 18),
  },
  Event: null,
  Rehomed: {
    Location: shepperton,
    Date: new Date(2018, 6, 15),
  },
};
