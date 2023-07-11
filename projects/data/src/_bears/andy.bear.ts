import { pagham } from '../_locations/pagham.location';
import { smallfield } from '../_locations/smallfield.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const andy: IBear = {
  Id: 'andy',
  Name: 'Andy',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: pagham,
    Date: new Date(2019, 8, 7),
  },
  Event: null,
  Rehomed: {
    Location: smallfield,
    Date: new Date(2022, 3, 23),
  },
};
