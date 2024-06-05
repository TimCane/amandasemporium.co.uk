import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { egham } from '../_locations/egham.location';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const kiara: IBear = {
  Id: 'kiara',
  Name: 'Kiara',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: farnham,
    Date: new Date(2023, 7, 12),
  },
  Event: null,
  Rehomed: {
    Location: egham,
    Date: new Date(2024, 4, 27),
  }
};
