import { cobham } from '../_locations/cobham.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const heidi: IBear = {
  Id: 'heidi',
  Name: 'Heidi',
  Type: BearType.BuildABear,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 12, 5),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 9, 25),
  },
};
