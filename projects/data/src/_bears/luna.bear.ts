import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { rabbit } from '../_bear-species/rabbit.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const luna: IBear = {
  Id: 'luna',
  Name: 'Luna',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Event: E20230923,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 8, 23),
  },
};
