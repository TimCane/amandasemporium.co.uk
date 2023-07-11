import { E20190928 } from '../_events/E2019-09-28.event';
import { chessington } from '../_locations/chessington.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const sara: IBear = {
  Id: 'sara',
  Name: 'Sara',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 4, 29),
  },
  Event: E20190928,
  Rehomed: {
    Location: chessington,
    Date: new Date(2019, 8, 28),
  },
};
