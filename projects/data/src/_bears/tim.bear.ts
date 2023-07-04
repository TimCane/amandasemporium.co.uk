import { horsham } from '../_locations/horsham.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tim: IBear = {
  Id: 'tim',
  Name: 'Tim',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Type: {
    Type: BearTypeEnum.ValentineHeartBear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 4, 25),
  },
  Event: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 6, 14),
  },
};
