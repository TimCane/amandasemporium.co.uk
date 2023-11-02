import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { rabbit } from '../_bear-species/rabbit.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { peterborough } from '../_locations/peterborough.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const greta: IBear = {
  Id: 'greta',
  Name: 'Greta',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: peterborough,
    Date: new Date(2023, 4, 1),
  },
  Event: E20230923,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 8, 23),
  },
};
