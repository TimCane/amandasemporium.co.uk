import { E20191130 } from '../_events/E2019-11-30.event';
import { appledram } from '../_locations/appledram.location';
import { effingham } from '../_locations/effingham.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const adrianna: IBear = {
  Id: 'adrianna',
  Name: 'Adrianna',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: appledram,
    Date: new Date(2019, 8, 7),
  },
  Event: E20191130,
  Rehomed: {
    Location: effingham,
    Date: new Date(2019, 10, 30),
  },
};
