import { kingston } from '../_locations/kingston.location';
import { selsey } from '../_locations/selsey.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const princess: IBear = {
  Id: 'princess',
  Name: 'Princess',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.BuildABear,
  Rescued: {
    Location: selsey,
    Date: new Date(2022, 4, 28),
  },
  Sold: null,
  Rehomed: {
    Location: kingston,
    Date: new Date(2022, 8, 24),
  },
};
