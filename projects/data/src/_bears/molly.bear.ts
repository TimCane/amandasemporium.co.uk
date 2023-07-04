import { E20190602 } from '../_events/E2019-06-02.event';
import { chertsey } from '../_locations/chertsey.location';
import { tadley } from '../_locations/tadley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const molly: IBear = {
  Id: 'molly',
  Name: 'Molly',
  UploadedOn: new Date(2018, 11, 3),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2018, 10, 26),
  },
  Event: E20190602,
  Rehomed: {
    Location: tadley,
    Date: new Date(2019, 5, 2),
  },
};
