import { withLove } from '../_bear-brands/with-love.bear-brand';
import { E20220924 } from '../_events/E2022-09-24.event';
import { hunston } from '../_locations/hunston.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const audrey: IBear = {
  Id: 'audrey',
  Name: 'Audrey',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: withLove,
    Species: bear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2022, 4, 7),
  },
  Event: E20220924,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 8, 24),
  },
};
