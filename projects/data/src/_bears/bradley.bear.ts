import { E20221204 } from '../_events/E2022-12-04.event';
import { cobham } from '../_locations/cobham.location';
import { knaphill } from '../_locations/knaphill.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bradley: IBear = {
  Id: 'bradley',
  Name: 'Bradley',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20221204,
  Rehomed: {
    Location: knaphill,
    Date: new Date(2022, 11, 4),
  },
};
