import { cobham } from '../_locations/cobham.location';
import { epsom } from '../_locations/epsom.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { dog } from './_species/dog.bear-species';

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
