import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { staines } from '../_locations/staines.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const nova: IBear = {
  Id: 'nova',
  Name: 'Nova',
  Description: ``,
  UploadedOn: new Date(2024, 3, 22),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: staines,
    Date: new Date(2024, 3, 10),
  },
  Event: null,
  Rehomed: null,
};
