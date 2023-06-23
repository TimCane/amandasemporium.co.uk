import { chessington } from '../_locations/chessington.location';
import { hunston } from '../_locations/hunston.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const benny: IBear = {
  Id: 'benny',
  Name: 'Benny',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: hunston,
    Date: new Date(2019, 9, 21),
  },
  Sold: null,
  Rehomed: {
    Location: chessington,
    Date: new Date(2021, 9, 25),
  },
};
