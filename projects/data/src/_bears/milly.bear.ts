import { E20210731 } from '../_events/E2021-07-31.event';
import { barkham } from '../_locations/barkham.location';
import { binfield } from '../_locations/binfield.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const milly: IBear = {
  Id: 'milly',
  Name: 'Milly',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: E20210731,
  Rehomed: {
    Location: barkham,
    Date: new Date(2021, 6, 31),
  },
};
