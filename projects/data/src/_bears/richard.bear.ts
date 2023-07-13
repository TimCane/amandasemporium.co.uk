import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { ashGreen } from '../_locations/ashGreen.location';
import { ashford } from '../_locations/ashford.location';
import { dog } from '../_bear-species/dog.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

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
