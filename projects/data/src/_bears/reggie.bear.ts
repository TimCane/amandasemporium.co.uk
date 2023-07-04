import { E20181110 } from '../_events/E2018-11-10.event';
import { reading } from '../_locations/reading.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const reggie: IBear = {
  Id: 'reggie',
  Name: 'Reggie',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 8, 2),
  },
  Event: E20181110,
  Rehomed: {
    Location: reading,
    Date: new Date(2018, 10, 10),
  },
};
