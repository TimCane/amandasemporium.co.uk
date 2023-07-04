import { maidenhead } from '../_locations/maidenhead.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const archie: IBear = {
  Id: 'archie',
  Name: 'Archie',
  Description: ``,
  UploadedOn: new Date(2019, 4, 27),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 4, 5),
  },
  Event: null,
  Rehomed: {
    Location: maidenhead,
    Date: new Date(2020, 3, 23),
  },
};
