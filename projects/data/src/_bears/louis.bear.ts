import { reading } from '../_locations/reading.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const louis: IBear = {
  Id: 'louis',
  Name: 'Louis',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: reading,
    Date: new Date(2019, 6, 28),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
