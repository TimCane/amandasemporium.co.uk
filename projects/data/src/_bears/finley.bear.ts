import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20230610 } from '../_events/E2023-06-10.event';
import { basingstoke } from '../_locations/basingstoke.location';
import { guildford } from '../_locations/guildford.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const finley: IBear = {
  Id: 'finley',
  Name: 'Finley',
  Description: ``,
  UploadedOn: new Date(2022, 11, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: guildford,
    Date: new Date(2022, 7, 7),
  },
  Event: E20230610,
  Rehomed: {
    Location: basingstoke,
    Date: new Date(2023, 5, 10),
  },
};
