import { E20180609 } from '../_events/E2018-06-09.event';
import { minsterLovell } from '../_locations/minsterLovell.location';
import { southsea } from '../_locations/southsea.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const clementine: IBear = {
  Id: 'clementine',
  Name: 'Clementine',
  Description: ``,
  UploadedOn: new Date(2018, 4, 18),
  Type: {
    Type: BearTypeEnum.TescoBear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Event: E20180609,
  Rehomed: {
    Location: minsterLovell,
    Date: new Date(2018, 5, 9),
  },
};
