import { bognor } from '../_locations/bognor.location';
import { weybridge } from '../_locations/weybridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const chris: IBear = {
  Id: 'chris',
  Name: 'Chris',
  UploadedOn: new Date(2019, 4, 31),
  Type: BearType.BuildABear,
  Rescued: {
    Location: weybridge,
    Date: new Date(2019, 3, 29),
  },
  Sold: null,
  Rehomed: {
    Location: bognor,
    Date: new Date(2019, 7, 14),
  },
};
