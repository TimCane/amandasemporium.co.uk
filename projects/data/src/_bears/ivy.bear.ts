import { bansted } from '../_locations/bansted.location';
import { binfield } from '../_locations/binfield.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ivy: IBear = {
  Id: 'ivy',
  Name: 'Ivy',
  UploadedOn: new Date(2021, 9, 7),
  Type: BearType.BuildABear,
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Sold: null,
  Rehomed: {
    Location: bansted,
    Date: new Date(2021, 11, 5),
  },
};
