import { andover } from '../_locations/andover.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const percy: IBear = {
  Id: 'percy',
  Name: 'Percy',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: andover,
    Date: new Date(2023, 5, 18),
  },
  Event: null,
  Rehomed: null,
};
