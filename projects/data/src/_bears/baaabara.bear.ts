import { addlestone } from '../_locations/addlestone.location';
import { leatherhead } from '../_locations/leatherhead.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { sheep } from './_species/sheep.bear-species';

export const baaabara: IBear = {
  Id: 'baaabara',
  Name: 'Baaabara',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: buildABear,
    Species: sheep,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2019, 10, 14),
  },
  Event: null,
  Rehomed: {
    Location: leatherhead,
    Date: new Date(2022, 3, 23),
  },
};
