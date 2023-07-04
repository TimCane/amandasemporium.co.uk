import { E20191214 } from '../_events/E2019-12-14.event';
import { ashford } from '../_locations/ashford.location';
import { horley } from '../_locations/horley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const felicity: IBear = {
  Id: 'felicity',
  Name: 'Felicity',
  UploadedOn: new Date(2019, 11, 12),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 9, 24),
  },
  Event: E20191214,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 11, 14),
  },
};
