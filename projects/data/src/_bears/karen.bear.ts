import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { stilton } from '../_locations/stilton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const karen: IBear = {
  Id: 'karen',
  Name: 'Karen',
  Description: ``,
  UploadedOn: new Date(2019, 1, 25),
  Type: {
    Type: BearTypeEnum.Unknown,
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
