import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { newbury } from '../_locations/newbury.location';
import { ripley } from '../_locations/ripley.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const stan: IBear = {
  Id: 'stan',
  Name: 'Stan',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 5, 10),
  },
  Event: null,
  Rehomed: {
    Location: newbury,
    Date: new Date(2018, 3, 22),
  },
};
