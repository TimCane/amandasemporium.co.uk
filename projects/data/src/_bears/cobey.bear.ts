import { chertsey } from '../_locations/chertsey.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cobey: IBear = {
  Id: 'cobey',
  Name: 'Cobey',
  UploadedOn: new Date(2022, 10, 8),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2020, 5, 1),
  },
  Event: null,
  Rehomed: null,
};
