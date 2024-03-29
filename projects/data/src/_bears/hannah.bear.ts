import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20210808 } from '../_events/E2021-08-08.event';
import { binfield } from '../_locations/binfield.location';
import { windsor } from '../_locations/windsor.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const hannah: IBear = {
  Id: 'hannah',
  Name: 'Hannah',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: E20210808,
  Rehomed: {
    Location: windsor,
    Date: new Date(2021, 7, 8),
  },
};
