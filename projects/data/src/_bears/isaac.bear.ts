import { ascot } from '../_locations/ascot.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isaac: IBear = {
  Id: 'isaac',
  Name: 'Isaac',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: ascot,
    Date: new Date(2022, 2, 3),
  },
  Event: null,
  Rehomed: null,
};
