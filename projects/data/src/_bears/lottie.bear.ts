import { E20190525 } from '../_events/E2019-05-25.event';
import { burnham } from '../_locations/burnham.location';
import { portsmouth } from '../_locations/portsmouth.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lottie: IBear = {
  Id: 'lottie',
  Name: 'Lottie',
  UploadedOn: new Date(2019, 4, 27),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: portsmouth,
    Date: new Date(2019, 4, 19),
  },
  Event: E20190525,
  Rehomed: {
    Location: burnham,
    Date: new Date(2019, 4, 25),
  },
};
