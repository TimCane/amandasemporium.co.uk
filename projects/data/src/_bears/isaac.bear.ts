import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { ascot } from '../_locations/ascot.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const isaac: IBear = {
  Id: 'isaac',
  Name: 'Isaac',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ascot,
    Date: new Date(2022, 2, 3),
  },
  Event: null,
  Rehomed: null,
};
