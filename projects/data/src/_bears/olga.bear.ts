import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { cobham } from '../_locations/cobham.location';
import { epsom } from '../_locations/epsom.location';
import { dog } from '../_bear-species/dog.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const olga: IBear = {
  Id: 'olga',
  Name: 'Olga',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: buildABear,
    Species: dog,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: null,
  Rehomed: {
    Location: epsom,
    Date: new Date(2021, 11, 5),
  },
};
