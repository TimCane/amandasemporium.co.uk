import { E20181202 } from '../_events/E2018-12-02.event';
import { egham } from '../_locations/egham.location';
import { leicester } from '../_locations/leicester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const holly: IBear = {
  Id: 'holly',
  Name: 'Holly',
  UploadedOn: new Date(2018, 11, 3),
  Type: BearType.BuildABear,
  Rescued: {
    Location: egham,
    Date: new Date(2018, 10, 26),
  },
  Event: E20181202,
  Rehomed: {
    Location: leicester,
    Date: new Date(2018, 11, 2),
  },
};
