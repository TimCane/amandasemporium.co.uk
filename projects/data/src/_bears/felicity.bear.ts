import { ashford } from '../_locations/ashford.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const felicity: IBear = {
  Id: 'felicity',
  Name: 'Felicity',
  UploadedOn: new Date(2019, 11, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 10, 24),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 12, 14),
  },
};
