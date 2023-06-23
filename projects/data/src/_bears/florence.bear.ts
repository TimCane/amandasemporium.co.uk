import { chichester } from '../_locations/chichester.location';
import { nottingham } from '../_locations/nottingham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const florence: IBear = {
  Id: 'florence',
  Name: 'Florence',
  UploadedOn: new Date(2022, 8, 26),
  Type: BearType.BuildABear,
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 9, 10),
  },
  Sold: null,
  Rehomed: {
    Location: nottingham,
    Date: new Date(2023, 5, 17),
  },
};
