import { ashford } from '../_locations/ashford.location';
import { crawley } from '../_locations/crawley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const gregory: IBear = {
  Id: 'gregory',
  Name: 'Gregory',
  UploadedOn: new Date(2019, 11, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 10, 24),
  },
  Sold: null,
  Rehomed: {
    Location: crawley,
    Date: new Date(2019, 12, 14),
  },
};
