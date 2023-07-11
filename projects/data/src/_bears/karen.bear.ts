import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { stilton } from '../_locations/stilton.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const karen: IBear = {
  Id: 'karen',
  Name: 'Karen',
  Description: ``,
  UploadedOn: new Date(2019, 1, 25),
  Info: {
    Brand: BearBrandEnum.Unknown,
    Species: BearSpeciesEnum.Bear,
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
