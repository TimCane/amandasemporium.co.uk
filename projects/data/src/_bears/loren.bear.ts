import { aldershot } from '../_locations/aldershot.location';
import { ashford } from '../_locations/ashford.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const loren: IBear = {
  Id: 'loren',
  Name: 'Loren',
  UploadedOn: new Date(2021, 6, 16),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 10, 24),
  },
  Sold: null,
  Rehomed: {
    Location: aldershot,
    Date: new Date(2021, 9, 25),
  },
};
