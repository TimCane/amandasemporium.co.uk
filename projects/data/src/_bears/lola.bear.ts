import { E20191201 } from '../_events/E2019-12-01.event';
import { ashford } from '../_locations/ashford.location';
import { rowtown } from '../_locations/rowtown.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const lola: IBear = {
  Id: 'lola',
  Name: 'Lola',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 7, 21),
  },
  Event: E20191201,
  Rehomed: {
    Location: rowtown,
    Date: new Date(2019, 11, 1),
  },
};
