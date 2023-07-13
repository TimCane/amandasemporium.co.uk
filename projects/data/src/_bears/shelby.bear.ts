import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20230617 } from '../_events/E2023-06-17.event';
import { nottingham } from '../_locations/nottingham.location';
import { pagham } from '../_locations/pagham.location';
import { rabbit } from '../_bear-species/rabbit.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const shelby: IBear = {
  Id: 'shelby',
  Name: 'Shelby',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: pagham,
    Date: new Date(2022, 8, 17),
  },
  Event: E20230617,
  Rehomed: {
    Location: nottingham,
    Date: new Date(2023, 5, 17),
  },
};
