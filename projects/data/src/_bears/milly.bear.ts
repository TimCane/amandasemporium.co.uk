import { barkham } from '../_locations/barkham.location';
import { binfield } from '../_locations/binfield.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const milly: IBear = {
  Id: 'milly',
  Name: 'Milly',
  UploadedOn: new Date(2021, 6, 16),
  Type: BearType.BuildABear,
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 2, 8),
  },
  Sold: null,
  Rehomed: {
    Location: barkham,
    Date: new Date(2021, 7, 31),
  },
};
