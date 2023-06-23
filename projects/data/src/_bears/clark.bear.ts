import { E20190413 } from '../_events/E2019-04-13.event';
import { hurley } from '../_locations/hurley.location';
import { weybridge } from '../_locations/weybridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const clark: IBear = {
  Id: 'clark',
  Name: 'Clark',
  UploadedOn: new Date(2019, 3, 7),
  Type: BearType.Unknown,
  Rescued: {
    Location: weybridge,
    Date: new Date(2018, 11, 20),
  },
  Event: E20190413,
  Rehomed: {
    Location: hurley,
    Date: new Date(2019, 3, 13),
  },
};
