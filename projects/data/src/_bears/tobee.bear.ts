import { maidenhead } from '../_locations/maidenhead.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tobee: IBear = {
  Id: 'tobee',
  Name: 'Tobee',
  UploadedOn: new Date(2018, 5, 11),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Sold: null,
  Rehomed: {
    Location: maidenhead,
    Date: new Date(2018, 5, 10),
  },
};
