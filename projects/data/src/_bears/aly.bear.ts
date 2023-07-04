import { E20210814 } from '../_events/E2021-08-14.event';
import { farnham } from '../_locations/farnham.location';
import { ruislip } from '../_locations/ruislip.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const aly: IBear = {
  Id: 'aly',
  Name: 'Aly',
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: ruislip,
    Date: new Date(2020, 7, 20),
  },
  Event: E20210814,
  Rehomed: {
    Location: farnham,
    Date: new Date(2021, 7, 14),
  },
};
