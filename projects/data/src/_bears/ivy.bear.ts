import { bansted } from '../_locations/bansted.location';
import { binfield } from '../_locations/binfield.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ivy: IBear = {
  Id: 'ivy',
  Name: 'Ivy',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: null,
  Rehomed: {
    Location: bansted,
    Date: new Date(2021, 11, 5),
  },
};
