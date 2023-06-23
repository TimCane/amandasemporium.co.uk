import { camberley } from '../_locations/camberley.location';
import { farnham } from '../_locations/farnham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const nellie: IBear = {
  Id: 'nellie',
  Name: 'Nellie',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.BuildABear,
  Rescued: {
    Location: camberley,
    Date: new Date(2022, 2, 12),
  },
  Sold: null,
  Rehomed: {
    Location: farnham,
    Date: new Date(2022, 8, 20),
  },
};
