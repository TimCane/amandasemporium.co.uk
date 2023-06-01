import { hunston } from '../_locations/hunston.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const audrey: IBear = {
  Id: 'audrey',
  Name: 'Audrey',
  Type: BearType.WithLoveBear,
  Rescued: {
    Location: hunston,
    Date: new Date(2022, 5, 7),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 24),
  },
};
