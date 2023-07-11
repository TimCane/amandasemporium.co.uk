import { chertsey } from '../_locations/chertsey.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cobey: IBear = {
  Id: 'cobey',
  Name: 'Cobey',
  Description: ``,
  UploadedOn: new Date(2022, 10, 8),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2020, 5, 1),
  },
  Event: null,
  Rehomed: null,
};
