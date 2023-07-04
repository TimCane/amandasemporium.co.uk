import { E20191006 } from '../_events/E2019-10-06.event';
import { billingshurst } from '../_locations/billingshurst.location';
import { chicester } from '../_locations/chicester.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cookie: IBear = {
  Id: 'cookie',
  Name: 'Cookie',
  Description: ``,
  UploadedOn: new Date(2019, 9, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 7, 3),
  },
  Event: E20191006,
  Rehomed: {
    Location: billingshurst,
    Date: new Date(2019, 9, 6),
  },
};
