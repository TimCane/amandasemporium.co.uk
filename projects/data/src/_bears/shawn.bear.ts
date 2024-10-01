import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { chertsey } from '../_locations/chertsey.location';
import { tolworth } from '../_locations/tolworth.location';
import { E20240928 } from '../_events/E2024-09-28.event';

export const shawn: IBear = {
  Id: 'shawn',
  Name: 'Shawn',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2023, 10, 1),
  },
  Event: E20240928,
  Rehomed: {
    Location: tolworth,
    Date: new Date(2024, 8, 28),
  },
};
