import { E20191006 } from '../_events/E2019-10-06.event';
import { billingshurst } from '../_locations/billingshurst.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const david: IBear = {
  Id: 'david',
  Name: 'David',
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 5, 2),
  },
  Event: E20191006,
  Rehomed: {
    Location: billingshurst,
    Date: new Date(2019, 9, 6),
  },
};
