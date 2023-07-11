import { basingstoke } from '../_locations/basingstoke.location';
import { stokedAbernon } from '../_locations/stokedAbernon.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const barnaby: IBear = {
  Id: 'barnaby',
  Name: 'Barnaby',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: basingstoke,
    Date: new Date(2018, 5, 19),
  },
  Event: null,
  Rehomed: {
    Location: stokedAbernon,
    Date: new Date(2018, 8, 2),
  },
};
