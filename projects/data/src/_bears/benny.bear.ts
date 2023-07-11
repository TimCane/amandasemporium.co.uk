import { E20210925 } from '../_events/E2021-09-25.event';
import { chessington } from '../_locations/chessington.location';
import { hunston } from '../_locations/hunston.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const benny: IBear = {
  Id: 'benny',
  Name: 'Benny',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2019, 8, 21),
  },
  Event: E20210925,
  Rehomed: {
    Location: chessington,
    Date: new Date(2021, 8, 25),
  },
};
