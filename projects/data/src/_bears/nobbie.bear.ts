import { russ } from '../_bear-brands/russ.bear-brand';
import { E20180408 } from '../_events/E2018-04-08.event';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { windsor } from '../_locations/windsor.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const nobbie: IBear = {
  Id: 'nobbie',
  Name: 'Nobbie',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: russ,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 3, 4),
  },
  Event: E20180408,
  Rehomed: {
    Location: windsor,
    Date: new Date(2018, 3, 8),
  },
};
