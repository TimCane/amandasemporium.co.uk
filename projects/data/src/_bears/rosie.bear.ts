import { bearFactory } from '../_brands/bear-factory.bear-brand';
import { E20181111 } from '../_events/E2018-11-11.event';
import { wallingford } from '../_locations/wallingford.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const rosie: IBear = {
  Id: 'rosie',
  Name: 'Rosie',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181111,
  Rehomed: {
    Location: wallingford,
    Date: new Date(2018, 10, 11),
  },
};
