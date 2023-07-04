import { bridgemary } from '../_locations/bridgemary.location';
import { cove } from '../_locations/cove.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tamara: IBear = {
  Id: 'tamara',
  Name: 'Tamara',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 5, 2),
  },
  Event: null,
  Rehomed: {
    Location: cove,
    Date: new Date(2019, 6, 7),
  },
};
