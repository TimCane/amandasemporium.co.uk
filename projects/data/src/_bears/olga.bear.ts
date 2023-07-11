import { cobham } from '../_locations/cobham.location';
import { epsom } from '../_locations/epsom.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const olga: IBear = {
  Id: 'olga',
  Name: 'Olga',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Dog,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: null,
  Rehomed: {
    Location: epsom,
    Date: new Date(2021, 11, 5),
  },
};
