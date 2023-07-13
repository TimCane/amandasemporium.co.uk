import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { ely } from '../_locations/ely.location';
import { horley } from '../_locations/horley.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const flossie: IBear = {
  Id: 'flossie',
  Name: 'Flossie',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ely,
    Date: new Date(2021, 7, 19),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 3, 23),
  },
};
