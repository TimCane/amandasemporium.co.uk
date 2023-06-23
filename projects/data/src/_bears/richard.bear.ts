import { ashGreen } from '../_locations/ashGreen.location';
import { ashford } from '../_locations/ashford.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const richard: IBear = {
  Id: 'richard',
  Name: 'Richard',
  UploadedOn: new Date(2021, 7, 11),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 10, 24),
  },
  Sold: null,
  Rehomed: {
    Location: ashGreen,
    Date: new Date(2021, 11, 21),
  },
};
