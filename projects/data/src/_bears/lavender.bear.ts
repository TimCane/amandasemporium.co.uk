import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20210731 } from '../_events/E2021-07-31.event';
import { binfield } from '../_locations/binfield.location';
import { wokingham } from '../_locations/wokingham.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const lavender: IBear = {
  Id: 'lavender',
  Name: 'Lavender',
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
  Event: E20210731,
  Rehomed: {
    Location: wokingham,
    Date: new Date(2021, 6, 31),
  },
};
