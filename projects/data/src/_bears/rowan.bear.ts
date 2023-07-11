import { ashford } from '../_locations/ashford.location';
import { bracknell } from '../_locations/bracknell.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rowan: IBear = {
  Id: 'rowan',
  Name: 'Rowan',
  Description: ``,
  UploadedOn: new Date(2019, 3, 7),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 0, 8),
  },
  Event: null,
  Rehomed: {
    Location: bracknell,
    Date: new Date(2019, 3, 20),
  },
};
