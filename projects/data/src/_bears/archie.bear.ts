import { maidenhead } from '../_locations/maidenhead.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const archie: IBear = {
  Id: 'archie',
  Name: 'Archie',
  UploadedOn: new Date(2019, 4, 27),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 5, 5),
  },
  Sold: null,
  Rehomed: {
    Location: maidenhead,
    Date: new Date(2020, 4, 23),
  },
};
