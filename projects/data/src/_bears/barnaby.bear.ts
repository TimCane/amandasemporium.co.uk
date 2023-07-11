import { basingstoke } from '../_locations/basingstoke.location';
import { stokedAbernon } from '../_locations/stokedAbernon.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const barnaby: IBear = {
  Id: 'barnaby',
  Name: 'Barnaby',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: basingstoke,
    Date: new Date(2018, 5, 19),
  },
  Event: null,
  Rehomed: {
    Location: stokedAbernon,
    Date: new Date(2018, 8, 2),
  },
};
