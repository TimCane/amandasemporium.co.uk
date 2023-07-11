import { farnborough } from '../_locations/farnborough.location';
import { staines } from '../_locations/staines.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { dog } from './_species/dog.bear-species';

export const daisy: IBear = {
  Id: 'daisy',
  Name: 'Daisy',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: buildABear,
    Species: dog,
  },
  Rescued: {
    Location: staines,
    Date: new Date(2021, 7, 26),
  },
  Event: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2021, 10, 20),
  },
};
