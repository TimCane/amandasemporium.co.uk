import { E20190413 } from '../_events/E2019-04-13.event';
import { bourneEnd } from '../_locations/bourneEnd.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { bearFactory } from './_brands/bear-factory.bear-brand';
import { bear } from './_species/bear.bear-species';

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
