import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20220924 } from '../_events/E2022-09-24.event';
import { crowborough } from '../_locations/crowborough.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const candy: IBear = {
  Id: 'candy',
  Name: 'Candy',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: crowborough,
    Date: new Date(2022, 3, 26),
  },
  Event: E20220924,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 8, 24),
  },
};
