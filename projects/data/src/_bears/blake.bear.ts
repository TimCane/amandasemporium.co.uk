import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const blake: IBear = {
  Id: 'blake',
  Name: 'Blake',
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2021, 7, 16),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 9, 25),
  },
};
