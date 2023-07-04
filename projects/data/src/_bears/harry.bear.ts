import { sunbury } from '../_locations/sunbury.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const harry: IBear = {
  Id: 'harry',
  Name: 'Harry',
  Description: ``,
  UploadedOn: new Date(2019, 4, 24),
  Type: {
    Type: BearTypeEnum.WHSmithBear,
  },
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 8, 13),
  },
  Event: null,
  Rehomed: {
    Location: sunbury,
    Date: new Date(2020, 3, 27),
  },
};
