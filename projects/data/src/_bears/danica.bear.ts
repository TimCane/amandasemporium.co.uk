import { wilkinson } from '../_bear-brands/wilkinson.bear-brand';
import { hunston } from '../_locations/hunston.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { E20240928 } from '../_events/E2024-09-28.event';
import { billericay } from '../_locations/billericay.location';

export const danica: IBear = {
  Id: 'danica',
  Name: 'Danica',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: wilkinson,
    Species: bear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2023, 3, 30),
  },
  Event: E20240928,
  Rehomed: {
    Location: billericay,
    Date: new Date(2024, 8, 28),
  },
};
