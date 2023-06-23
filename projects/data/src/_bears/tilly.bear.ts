import { E20210925 } from '../_events/E2021-09-25.event';
import { eastGrinstead } from '../_locations/eastGrinstead.location';
import { kingston } from '../_locations/kingston.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tilly: IBear = {
  Id: 'tilly',
  Name: 'Tilly',
  UploadedOn: new Date(2021, 7, 11),
  Type: BearType.BearFactory,
  Rescued: {
    Location: eastGrinstead,
    Date: new Date(2020, 2, 9),
  },
  Event: E20210925,
  Rehomed: {
    Location: kingston,
    Date: new Date(2021, 8, 25),
  },
};
