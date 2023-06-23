import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bruce: IBear = {
  Id: 'bruce',
  Name: 'Bruce',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: bexhillOnSea,
    Date: new Date(2019, 9, 14),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 9, 28),
  },
};
