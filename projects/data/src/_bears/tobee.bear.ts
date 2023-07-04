import { E20180610 } from '../_events/E2018-06-10.event';
import { maidenhead } from '../_locations/maidenhead.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tobee: IBear = {
  Id: 'tobee',
  Name: 'Tobee',
  Description: ``,
  UploadedOn: new Date(2018, 5, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Event: E20180610,
  Rehomed: {
    Location: maidenhead,
    Date: new Date(2018, 5, 10),
  },
};
