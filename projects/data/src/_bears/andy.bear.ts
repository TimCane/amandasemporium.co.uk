import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { pagham } from '../_locations/pagham.location';
import { smallfield } from '../_locations/smallfield.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const andy: IBear = {
  Id: 'andy',
  Name: 'Andy',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: pagham,
    Date: new Date(2019, 8, 7),
  },
  Event: null,
  Rehomed: {
    Location: smallfield,
    Date: new Date(2022, 3, 23),
  },
};
