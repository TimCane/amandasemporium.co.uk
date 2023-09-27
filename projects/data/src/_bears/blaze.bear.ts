// blaze.bear.ts
import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { cat } from '../_bear-species/cat.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { littlehampton } from '../_locations/littlehampton.location';
import { tolworth } from '../_locations/tolworth.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const blaze: IBear = {
  Id: 'blaze',
  Name: 'Blaze',
  Description: '',
  UploadedOn: new Date(2023, 8, 27),
  Info: {
    Brand: buildABear,
    Species: cat,
  },
  Rescued: {
    Location: littlehampton,
    Date: new Date(2023, 8, 10),
  },
  Event: E20230923,
  Rehomed: {
    Location: tolworth,
    Date: new Date(2023, 8, 23),
  },
};
