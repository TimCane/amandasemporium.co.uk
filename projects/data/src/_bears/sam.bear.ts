import { E20180526 } from '../_events/E2018-05-26.event';
import { burnham } from '../_locations/burnham.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sam: IBear = {
  Id: 'sam',
  Name: 'Sam',
  UploadedOn: new Date(2018, 4, 18),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Event: E20180526,
  Rehomed: {
    Location: burnham,
    Date: new Date(2018, 4, 26),
  },
};
