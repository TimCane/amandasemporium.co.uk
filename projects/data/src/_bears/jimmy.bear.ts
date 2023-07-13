import { bearFactory } from '../_bear-brands/bear-factory.bear-brand';
import { E20190413 } from '../_events/E2019-04-13.event';
import { bourneEnd } from '../_locations/bourneEnd.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const jimmy: IBear = {
  Id: 'jimmy',
  Name: 'Jimmy',
  Description: ``,
  UploadedOn: new Date(2019, 3, 7),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 0, 17),
  },
  Event: E20190413,
  Rehomed: {
    Location: bourneEnd,
    Date: new Date(2019, 3, 13),
  },
};
