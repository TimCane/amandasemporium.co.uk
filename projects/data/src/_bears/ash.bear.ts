import { unknown } from '../_bear-brands/unknown.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20240420 } from '../_events/E2024-04-20.event';
import { horley } from '../_locations/horley.location';
import { longparish } from '../_locations/longparish.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const ash: IBear = {
  Id: 'ash',
  Name: 'Ash',
  Description: ``,
  UploadedOn: new Date(2024, 3, 22),
  Info: {
    Brand: unknown,
    Species: bear,
  },
  Rescued: {
    Location: longparish,
    Date: new Date(2023, 8, 10),
  },
  Event: E20240420,
  Rehomed: {
    Location: horley,
    Date: new Date(2024, 3, 20),
  },
};
