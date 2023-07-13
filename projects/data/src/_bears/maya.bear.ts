import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20221127 } from '../_events/E2022-11-27.event';
import { hook } from '../_locations/hook.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const maya: IBear = {
  Id: 'maya',
  Name: 'Maya',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 9, 18),
  },
  Event: E20221127,
  Rehomed: {
    Location: hook,
    Date: new Date(2022, 10, 27),
  },
};
