import { E20210925 } from '../_events/E2021-09-25.event';
import { chessington } from '../_locations/chessington.location';
import { chicester } from '../_locations/chicester.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tess: IBear = {
  Id: 'tess',
  Name: 'Tess',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Type: {
    Type: BearTypeEnum.Morrisons,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 9, 6),
  },
  Event: E20210925,
  Rehomed: {
    Location: chessington,
    Date: new Date(2021, 8, 25),
  },
};
