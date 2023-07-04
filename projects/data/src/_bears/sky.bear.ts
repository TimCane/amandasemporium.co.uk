import { E20210814 } from '../_events/E2021-08-14.event';
import { binfield } from '../_locations/binfield.location';
import { churchCrookham } from '../_locations/churchCrookham.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sky: IBear = {
  Id: 'sky',
  Name: 'Sky',
  Description: ``,
  UploadedOn: new Date(2021, 7, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: E20210814,
  Rehomed: {
    Location: churchCrookham,
    Date: new Date(2021, 7, 14),
  },
};
