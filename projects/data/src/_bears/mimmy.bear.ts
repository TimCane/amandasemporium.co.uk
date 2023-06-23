import { binfield } from '../_locations/binfield.location';
import { winnersh } from '../_locations/winnersh.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mimmy: IBear = {
  Id: 'mimmy',
  Name: 'Mimmy',
  UploadedOn: new Date(2021, 6, 16),
  Type: BearType.BuildABear,
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 12, 8),
  },
  Sold: null,
  Rehomed: {
    Location: winnersh,
    Date: new Date(2021, 7, 31),
  },
};
