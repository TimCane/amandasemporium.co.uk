import { appledram } from '../_locations/appledram.location';
import { effingham } from '../_locations/effingham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const adrianna: IBear = {
  Id: 'adrianna',
  Name: 'Adrianna',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: appledram,
    Date: new Date(2019, 8, 7),
  },
  Sold: null,
  Rehomed: {
    Location: effingham,
    Date: new Date(2019, 10, 30),
  },
};
