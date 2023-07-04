import { E20181122 } from '../_events/E2018-11-22.event';
import { chertsey } from '../_locations/chertsey.location';
import { philadelphiaUSA } from '../_locations/philadelphiaUSA.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const poppy: IBear = {
  Id: 'poppy',
  Name: 'Poppy',
  UploadedOn: new Date(2018, 3, 29),
  Type: {
    Type: BearTypeEnum.AsWatsonHealthAndBeautyCo,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2018, 2, 26),
  },
  Event: E20181122,
  Rehomed: {
    Location: philadelphiaUSA,
    Date: new Date(2018, 10, 22),
  },
};
