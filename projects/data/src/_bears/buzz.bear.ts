import { hunston } from '../_locations/hunston.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const buzz: IBear = {
  Id: 'buzz',
  Name: 'Buzz',
  Type: BearType.BuildABear,
  Rescued: {
    Location: hunston,
    Date: new Date(2019, 9, 21),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 9, 28),
  },
};
