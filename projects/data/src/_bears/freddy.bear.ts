import { E20181208 } from '../_events/E2018-12-08.event';
import { egham } from '../_locations/egham.location';
import { horley } from '../_locations/horley.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { barnesAndNoble } from './_brands/barnes-and-noble.bear-brand';
import { bear } from './_species/bear.bear-species';

export const freddy: IBear = {
  Id: 'freddy',
  Name: 'Freddy',
  Description: ``,
  UploadedOn: new Date(2018, 11, 3),
  Info: {
    Brand: barnesAndNoble,
    Species: bear,
  },
  Rescued: {
    Location: egham,
    Date: new Date(2018, 10, 26),
  },
  Event: E20181208,
  Rehomed: {
    Location: horley,
    Date: new Date(2018, 11, 8),
  },
};
