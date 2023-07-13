import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { chicester } from '../_locations/chicester.location';
import { dog } from '../_bear-species/dog.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const jemma: IBear = {
  Id: 'jemma',
  Name: 'Jemma',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: buildABear,
    Species: dog,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2022, 8, 10),
  },
  Event: null,
  Rehomed: null,
};
