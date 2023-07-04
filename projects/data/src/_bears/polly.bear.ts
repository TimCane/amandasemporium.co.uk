import { E20190602 } from '../_events/E2019-06-02.event';
import { dorchester } from '../_locations/dorchester.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const polly: IBear = {
  Id: 'polly',
  Name: 'Polly',
  Description: ``,
  UploadedOn: new Date(2018, 11, 3),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 9, 13),
  },
  Event: E20190602,
  Rehomed: {
    Location: dorchester,
    Date: new Date(2019, 5, 2),
  },
};
