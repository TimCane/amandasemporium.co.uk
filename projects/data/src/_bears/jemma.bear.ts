import { chicester } from '../_locations/chicester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jemma: IBear = {
  Id: 'jemma',
  Name: 'Jemma',
  UploadedOn: new Date(2023, 4, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: chicester,
    Date: new Date(2022, 8, 10),
  },
  Sold: null,
  Rehomed: null,
};
