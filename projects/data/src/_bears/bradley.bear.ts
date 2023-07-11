import { E20221204 } from '../_events/E2022-12-04.event';
import { cobham } from '../_locations/cobham.location';
import { knaphill } from '../_locations/knaphill.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const bradley: IBear = {
  Id: 'bradley',
  Name: 'Bradley',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20221204,
  Rehomed: {
    Location: knaphill,
    Date: new Date(2022, 11, 4),
  },
};
