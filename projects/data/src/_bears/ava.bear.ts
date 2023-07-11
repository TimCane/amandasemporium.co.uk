import { E20230625 } from '../_events/E2023-06-25.event';
import { addlestone } from '../_locations/addlestone.location';
import { colchester } from '../_locations/colchester.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const ava: IBear = {
  Id: 'ava',
  Name: 'Ava',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 4, 18),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: colchester,
  },
};
