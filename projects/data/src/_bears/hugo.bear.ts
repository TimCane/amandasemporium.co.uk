import { basingstoke } from '../_locations/basingstoke.location';
import { chichester } from '../_locations/chichester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hugo: IBear = {
  Id: 'hugo',
  Name: 'Hugo',
  UploadedOn: new Date(2022, 8, 26),
  Type: BearType.BuildABear,
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 8, 10),
  },
  Sold: null,
  Rehomed: {
    Location: basingstoke,
    Date: new Date(2023, 5, 10),
  },
};
