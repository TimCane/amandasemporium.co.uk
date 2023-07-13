import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20220924 } from '../_events/E2022-09-24.event';
import { chessington } from '../_locations/chessington.location';
import { ely } from '../_locations/ely.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const grayson: IBear = {
  Id: 'grayson',
  Name: 'Grayson',
  Description: ``,
  UploadedOn: new Date(2022, 3, 24),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ely,
    Date: new Date(2021, 7, 19),
  },
  Event: E20220924,
  Rehomed: {
    Location: chessington,
    Date: new Date(2022, 8, 24),
  },
};
