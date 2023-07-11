import { farnborough } from '../_locations/farnborough.location';
import { southsea } from '../_locations/southsea.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rosa: IBear = {
  Id: 'rosa',
  Name: 'Rosa',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 5, 2),
  },
  Event: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2020, 9, 17),
  },
};
