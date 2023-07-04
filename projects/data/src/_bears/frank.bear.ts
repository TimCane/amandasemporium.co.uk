import { E20190921 } from '../_events/E2019-09-21.event';
import { godalming } from '../_locations/godalming.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const frank: IBear = {
  Id: 'frank',
  Name: 'Frank',
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 7, 26),
  },
  Event: E20190921,
  Rehomed: {
    Location: godalming,
    Date: new Date(2019, 8, 21),
  },
};
