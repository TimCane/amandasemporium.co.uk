import { southsea } from '../_locations/southsea.location';
import { sutton } from '../_locations/sutton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const charlie: IBear = {
  Id: 'charlie',
  Name: 'Charlie',
  UploadedOn: new Date(2018, 4, 18),
  Type: BearType.TyBear,
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 4, 28),
  },
  Sold: null,
  Rehomed: {
    Location: sutton,
    Date: new Date(2018, 5, 6),
  },
};
