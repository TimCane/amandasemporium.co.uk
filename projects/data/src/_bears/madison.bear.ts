import { emworth } from '../_locations/emworth.location';
import { send } from '../_locations/send.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const madison: IBear = {
  Id: 'madison',
  Name: 'Madison',
  Type: BearType.BuildABear,
  Rescued: {
    Location: emworth,
    Date: new Date(2018, 7, 7),
  },
  Sold: null,
  Rehomed: {
    Location: send,
    Date: new Date(2019, 12, 1),
  },
};
