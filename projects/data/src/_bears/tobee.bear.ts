import { E20180610 } from '../_events/E2018-06-10.event';
import { maidenhead } from '../_locations/maidenhead.location';
import { southsea } from '../_locations/southsea.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tobee: IBear = {
  Id: 'tobee',
  Name: 'Tobee',
  Description: ``,
  UploadedOn: new Date(2018, 5, 11),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Event: E20180610,
  Rehomed: {
    Location: maidenhead,
    Date: new Date(2018, 5, 10),
  },
};
