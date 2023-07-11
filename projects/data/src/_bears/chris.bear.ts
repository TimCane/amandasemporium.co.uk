import { bognor } from '../_locations/bognor.location';
import { weybridge } from '../_locations/weybridge.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const chris: IBear = {
  Id: 'chris',
  Name: 'Chris',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: weybridge,
    Date: new Date(2019, 2, 29),
  },
  Event: null,
  Rehomed: {
    Location: bognor,
    Date: new Date(2019, 6, 14),
  },
};
