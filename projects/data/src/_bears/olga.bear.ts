import { cobham } from '../_locations/cobham.location';
import { epsom } from '../_locations/epsom.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const olga: IBear = {
  Id: 'olga',
  Name: 'Olga',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
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
