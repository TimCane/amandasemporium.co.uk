import { basingstoke } from '../_locations/basingstoke.location';
import { stokedAbernon } from '../_locations/stokedAbernon.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const barnaby: IBear = {
  Id: 'barnaby',
  Name: 'Barnaby',
  UploadedOn: new Date(2018, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: basingstoke,
    Date: new Date(2018, 5, 19),
  },
  Event: null,
  Rehomed: {
    Location: stokedAbernon,
    Date: new Date(2018, 8, 2),
  },
};
