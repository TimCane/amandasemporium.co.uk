import { send } from '../_locations/send.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const harvey: IBear = {
  Id: 'harvey',
  Name: 'Harvey',
  UploadedOn: new Date(2019, 9, 7),
  Type: BearType.BuildABear,
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 8, 13),
  },
  Sold: null,
  Rehomed: {
    Location: send,
    Date: new Date(2019, 11, 1),
  },
};
