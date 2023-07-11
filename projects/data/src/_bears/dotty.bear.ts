import { E20190921 } from '../_events/E2019-09-21.event';
import { birdham } from '../_locations/birdham.location';
import { bordon } from '../_locations/bordon.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const dotty: IBear = {
  Id: 'dotty',
  Name: 'Dotty',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: birdham,
    Date: new Date(2019, 7, 24),
  },
  Event: E20190921,
  Rehomed: {
    Location: bordon,
    Date: new Date(2019, 8, 21),
  },
};
