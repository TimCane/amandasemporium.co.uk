import { woking } from '../_locations/woking.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const wendy: IBear = {
  Id: 'wendy',
  Name: 'Wendy',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.WHSmithBear,
  },
  Rescued: {
    Location: woking,
    Date: new Date(2022, 10, 1),
  },
  Event: null,
  Rehomed: null,
};
