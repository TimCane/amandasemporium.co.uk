import { E20190525 } from '../_events/E2019-05-25.event';
import { etonWick } from '../_locations/etonWick.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const aaron: IBear = {
  Id: 'aaron',
  Name: 'Aaron',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 9, 13),
  },
  Event: E20190525,
  Rehomed: {
    Location: etonWick,
    Date: new Date(2019, 4, 25),
  },
};
