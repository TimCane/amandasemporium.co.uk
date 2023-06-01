import { surbiton } from '../_locations/surbiton.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const gus: IBear = {
  Id: 'gus',
  Name: 'Gus',
  Type: BearType.BuildABear,
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 9, 13),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 9, 28),
  },
};
