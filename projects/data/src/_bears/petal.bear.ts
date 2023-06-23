import { seaford } from '../_locations/seaford.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const petal: IBear = {
  Id: 'petal',
  Name: 'Petal',
  UploadedOn: new Date(2023, 5, 20),
  Type: BearType.BuildABear,
  Rescued: {
    Location: seaford,
    Date: new Date(2023, 5, 11),
  },
  Sold: null,
  Rehomed: null,
};
