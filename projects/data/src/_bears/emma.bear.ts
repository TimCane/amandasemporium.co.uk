import { weybridge } from '../_locations/weybridge.location';
import { woking } from '../_locations/woking.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const emma: IBear = {
  Id: 'emma',
  Name: 'Emma',
  UploadedOn: new Date(2018, 10, 24),
  Type: BearType.BuildABear,
  Rescued: {
    Location: weybridge,
    Date: new Date(2018, 11, 1),
  },
  Sold: null,
  Rehomed: {
    Location: woking,
    Date: new Date(2020, 3, 4),
  },
};
