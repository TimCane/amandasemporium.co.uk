import { binfield } from '../_locations/binfield.location';
import { wokingham } from '../_locations/wokingham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lavender: IBear = {
  Id: 'lavender',
  Name: 'Lavender',
  Type: BearType.BuildABear,
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 2, 8),
  },
  Sold: null,
  Rehomed: {
    Location: wokingham,
    Date: new Date(2021, 7, 31),
  },
};
