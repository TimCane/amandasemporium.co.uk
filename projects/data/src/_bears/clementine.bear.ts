import { minsterLovell } from '../_locations/minsterLovell.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const clementine: IBear = {
  Id: 'clementine',
  Name: 'Clementine',
  UploadedOn: new Date(2018, 4, 18),
  Type: BearType.TescoBear,
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 4, 28),
  },
  Sold: null,
  Rehomed: {
    Location: minsterLovell,
    Date: new Date(2018, 6, 9),
  },
};
