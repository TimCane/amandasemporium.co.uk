import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { sunbury } from '../_locations/sunbury.location';
import { E20240928 } from '../_events/E2024-09-28.event';
import { tolworth } from '../_locations/tolworth.location';

export const kai: IBear = {
  Id: 'kai',
  Name: 'Kai',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: sunbury,
    Date: new Date(2024, 0, 20),
  },
  Event: E20240928,
  Rehomed: {
    Location: tolworth,
    Date: new Date(2024, 8, 28),
  },
};
