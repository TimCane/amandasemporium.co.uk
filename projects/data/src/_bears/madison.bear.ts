import { emsworth } from '../_locations/emsworth.location';
import { send } from '../_locations/send.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const madison: IBear = {
  Id: 'madison',
  Name: 'Madison',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: emsworth,
    Date: new Date(2018, 6, 7),
  },
  Sold: null,
  Rehomed: {
    Location: send,
    Date: new Date(2019, 11, 1),
  },
};
