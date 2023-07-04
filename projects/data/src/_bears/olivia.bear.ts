import { E20190921 } from '../_events/E2019-09-21.event';
import { shepperton } from '../_locations/shepperton.location';
import { yateley } from '../_locations/yateley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const olivia: IBear = {
  Id: 'olivia',
  Name: 'Olivia',
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2019, 7, 24),
  },
  Event: E20190921,
  Rehomed: {
    Location: yateley,
    Date: new Date(2019, 8, 21),
  },
};
