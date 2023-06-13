import { cobham } from '../_locations/cobham.location';
import { kingston } from '../_locations/kingston.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const leonardo: IBear = {
  Id: 'leonardo',
  Name: 'Leonardo',
  Type: BearType.BuildABear,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 12, 5),
  },
  Sold: null,
  Rehomed: {
    Location: kingston,
    Date: new Date(2021, 9, 25),
  },
};
