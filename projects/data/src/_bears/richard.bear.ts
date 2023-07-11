import { ashGreen } from '../_locations/ashGreen.location';
import { ashford } from '../_locations/ashford.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { dog } from './_species/dog.bear-species';

export const richard: IBear = {
  Id: 'richard',
  Name: 'Richard',
  Description: ``,
  UploadedOn: new Date(2021, 7, 11),
  Info: {
    Brand: buildABear,
    Species: dog,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 9, 24),
  },
  Event: null,
  Rehomed: {
    Location: ashGreen,
    Date: new Date(2021, 10, 21),
  },
};
