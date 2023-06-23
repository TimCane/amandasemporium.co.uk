import { farnham } from '../_locations/farnham.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hayden: IBear = {
  Id: 'hayden',
  Name: 'Hayden',
  UploadedOn: new Date(2019, 4, 31),
  Type: BearType.BuildABear,
  Rescued: {
    Location: farnham,
    Date: new Date(2019, 4, 13),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 9, 28),
  },
};
