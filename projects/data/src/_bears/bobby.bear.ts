import { E20190928 } from '../_events/E2019-09-28.event';
import { birdham } from '../_locations/birdham.location';
import { chessington } from '../_locations/chessington.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bobby: IBear = {
  Id: 'bobby',
  Name: 'Bobby',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: birdham,
    Date: new Date(2019, 7, 24),
  },
  Event: E20190928,
  Rehomed: {
    Location: chessington,
    Date: new Date(2019, 8, 28),
  },
};
