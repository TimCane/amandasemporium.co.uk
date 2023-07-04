import { E20210731 } from '../_events/E2021-07-31.event';
import { barkham } from '../_locations/barkham.location';
import { binfield } from '../_locations/binfield.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const milly: IBear = {
  Id: 'milly',
  Name: 'Milly',
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: E20210731,
  Rehomed: {
    Location: barkham,
    Date: new Date(2021, 6, 31),
  },
};
