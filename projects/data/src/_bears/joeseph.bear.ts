import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { addlestone } from '../_locations/addlestone.location';
import { andover } from '../_locations/andover.location';

export const joeseph: IBear = {
  Id: 'joeseph',
  Name: 'Joeseph',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: andover,
    Date: new Date(2024, 3, 12),
  },
  Event: null,
  Rehomed: null
};
