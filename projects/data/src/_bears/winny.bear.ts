import { E20181109 } from '../_events/E2018-11-09.event';
import { shepperton } from '../_locations/shepperton.location';
import { theale } from '../_locations/theale.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const winny: IBear = {
  Id: 'winny',
  Name: 'Winny',
  UploadedOn: new Date(2018, 10, 12),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Event: E20181109,
  Rehomed: {
    Location: theale,
    Date: new Date(2018, 10, 9),
  },
};
