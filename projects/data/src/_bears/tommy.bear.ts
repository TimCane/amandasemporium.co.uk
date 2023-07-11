import { E20221204 } from '../_events/E2022-12-04.event';
import { chichester } from '../_locations/chichester.location';
import { woking } from '../_locations/woking.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const tommy: IBear = {
  Id: 'tommy',
  Name: 'Tommy',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 4, 21),
  },
  Event: E20221204,
  Rehomed: {
    Location: woking,
    Date: new Date(2022, 11, 4),
  },
};
