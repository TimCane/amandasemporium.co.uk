import { E20230709 } from '../_events/E2023-07-09.event';
import { guildford } from '../_locations/guildford.location';
import { shepperton } from '../_locations/shepperton.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const cora: IBear = {
  Id: 'cora',
  Name: 'Cora',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: E20230709,
  Rehomed: {
    Location: guildford,
    Date: new Date(2023, 6, 9),
  },
};
