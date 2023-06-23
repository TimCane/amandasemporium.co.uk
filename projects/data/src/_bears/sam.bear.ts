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
    Date: new Date(2018, 4, 28),
  },
  Sold: null,
  Rehomed: {
    Location: burnham,
    Date: new Date(2018, 5, 26),
  },
};
