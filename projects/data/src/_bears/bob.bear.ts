import { E20190525 } from '../_events/E2019-05-25.event';
import { chertsey } from '../_locations/chertsey.location';
import { miltonKeynes } from '../_locations/miltonKeynes.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bob: IBear = {
  Id: 'bob',
  Name: 'Bob',
  Description: ``,
  UploadedOn: new Date(2019, 3, 7),
  Info: {
    Brand: BearBrandEnum.KeelCubbyBear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 0, 17),
  },
  Event: E20190525,
  Rehomed: {
    Location: miltonKeynes,
    Date: new Date(2019, 4, 25),
  },
};
