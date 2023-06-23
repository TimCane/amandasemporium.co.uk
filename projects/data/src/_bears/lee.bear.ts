import { ruislip } from '../_locations/ruislip.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lee: IBear = {
  Id: 'lee',
  Name: 'Lee',
  UploadedOn: new Date(2023, 5, 20),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ruislip,
    Date: new Date(2022, 11, 21),
  },
  Sold: null,
  Rehomed: null,
};
