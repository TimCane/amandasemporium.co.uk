import { bridgemary } from '../_locations/bridgemary.location';
import { cove } from '../_locations/cove.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tamara: IBear = {
  Id: 'tamara',
  Name: 'Tamara',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 5, 2),
  },
  Event: null,
  Rehomed: {
    Location: cove,
    Date: new Date(2019, 6, 7),
  },
};
