import { E20181202 } from '../_events/E2018-12-02.event';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { wisley } from '../_locations/wisley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jack: IBear = {
  Id: 'jack',
  Name: 'Jack',
  UploadedOn: new Date(2018, 3, 29),
  Type: BearType.GloriousBritainJointedBear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 3, 18),
  },
  Event: E20181202,
  Rehomed: {
    Location: wisley,
    Date: new Date(2018, 11, 2),
  },
};
