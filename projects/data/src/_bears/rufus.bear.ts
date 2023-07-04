import { E20191130 } from '../_events/E2019-11-30.event';
import { bridgemary } from '../_locations/bridgemary.location';
import { woking } from '../_locations/woking.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rufus: IBear = {
  Id: 'rufus',
  Name: 'Rufus',
  UploadedOn: new Date(2019, 6, 18),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 5, 2),
  },
  Event: E20191130,
  Rehomed: {
    Location: woking,
    Date: new Date(2019, 10, 30),
  },
};
