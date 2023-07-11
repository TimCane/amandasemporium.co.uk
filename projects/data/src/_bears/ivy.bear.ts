import { bansted } from '../_locations/bansted.location';
import { binfield } from '../_locations/binfield.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ivy: IBear = {
  Id: 'ivy',
  Name: 'Ivy',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: null,
  Rehomed: {
    Location: bansted,
    Date: new Date(2021, 11, 5),
  },
};
