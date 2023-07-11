import { farnborough } from '../_locations/farnborough.location';
import { staines } from '../_locations/staines.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const daisy: IBear = {
  Id: 'daisy',
  Name: 'Daisy',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Dog,
  },
  Rescued: {
    Location: staines,
    Date: new Date(2021, 7, 26),
  },
  Event: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2021, 10, 20),
  },
};
