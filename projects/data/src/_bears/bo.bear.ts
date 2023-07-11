import { E20180506 } from '../_events/E2018-05-06.event';
import { portsmouth } from '../_locations/portsmouth.location';
import { titchfield } from '../_locations/titchfield.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bo: IBear = {
  Id: 'bo',
  Name: 'Bo',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: titchfield,
    Date: new Date(2018, 3, 21),
  },
  Event: E20180506,
  Rehomed: {
    Location: portsmouth,
    Date: new Date(2018, 4, 6),
  },
};
