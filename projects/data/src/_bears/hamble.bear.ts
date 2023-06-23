import { E20190817 } from '../_events/E2019-08-17.event';
import { farnham } from '../_locations/farnham.location';
import { kingsbridge } from '../_locations/kingsbridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hamble: IBear = {
  Id: 'hamble',
  Name: 'Hamble',
  UploadedOn: new Date(2019, 6, 18),
  Type: BearType.BuildABear,
  Rescued: {
    Location: kingsbridge,
    Date: new Date(2019, 5, 12),
  },
  Event: E20190817,
  Rehomed: {
    Location: farnham,
    Date: new Date(2019, 7, 17),
  },
};
