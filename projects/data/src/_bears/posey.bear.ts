import { E20191130 } from '../_events/E2019-11-30.event';
import { guildford } from '../_locations/guildford.location';
import { hunston } from '../_locations/hunston.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const posey: IBear = {
  Id: 'posey',
  Name: 'Posey',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: hunston,
    Date: new Date(2019, 8, 21),
  },
  Event: E20191130,
  Rehomed: {
    Location: guildford,
    Date: new Date(2019, 10, 30),
  },
};
