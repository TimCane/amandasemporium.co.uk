import { E20180610 } from '../_events/E2018-06-10.event';
import { burnham } from '../_locations/burnham.location';
import { minsterLovell } from '../_locations/minsterLovell.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const norman: IBear = {
  Id: 'norman',
  Name: 'Norman',
  Description: ``,
  UploadedOn: new Date(2018, 5, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: burnham,
    Date: new Date(2018, 4, 26),
  },
  Event: E20180610,
  Rehomed: {
    Location: minsterLovell,
    Date: new Date(2018, 5, 10),
  },
};
