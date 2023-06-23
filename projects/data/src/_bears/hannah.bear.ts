import { binfield } from '../_locations/binfield.location';
import { windsor } from '../_locations/windsor.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hannah: IBear = {
  Id: 'hannah',
  Name: 'Hannah',
  UploadedOn: new Date(2021, 6, 16),
  Type: BearType.BuildABear,
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Sold: null,
  Rehomed: {
    Location: windsor,
    Date: new Date(2021, 7, 8),
  },
};
