import { E20180506 } from '../_events/E2018-05-06.event';
import { shrewsbury } from '../_locations/shrewsbury.location';
import { wandsworth } from '../_locations/wandsworth.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const henry: IBear = {
  Id: 'henry',
  Name: 'Henry',
  UploadedOn: new Date(2018, 3, 29),
  Type: {
    Type: BearTypeEnum.WHSmithBear,
  },
  Rescued: {
    Location: shrewsbury,
    Date: new Date(2018, 3, 18),
  },
  Event: E20180506,
  Rehomed: {
    Location: wandsworth,
    Date: new Date(2018, 4, 6),
  },
};
