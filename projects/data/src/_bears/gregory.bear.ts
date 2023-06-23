import { E20191214 } from '../_events/E2019-12-14.event';
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
    Date: new Date(2019, 9, 24),
  },
  Event: E20191214,
  Rehomed: {
    Location: crawley,
    Date: new Date(2019, 11, 14),
  },
};
