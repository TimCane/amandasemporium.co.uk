import { russ } from '../_bear-brands/russ.bear-brand';
import { E20210925 } from '../_events/E2021-09-25.event';
import { bridgemary } from '../_locations/bridgemary.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const james: IBear = {
  Id: 'james',
  Name: 'James',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: russ,
    Species: bear,
  },
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 5, 2),
  },
  Event: E20210925,
  Rehomed: {
    Location: waltonUponThames,
    Date: new Date(2021, 8, 25),
  },
};
