import { E20220924 } from '../_events/E2022-09-24.event';
import { chessington } from '../_locations/chessington.location';
import { ely } from '../_locations/ely.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const grayson: IBear = {
  Id: 'grayson',
  Name: 'Grayson',
  UploadedOn: new Date(2022, 3, 24),
  Type: {
    Type: BearTypeEnum.BuildABear,
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
