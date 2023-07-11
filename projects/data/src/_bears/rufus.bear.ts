import { E20191130 } from '../_events/E2019-11-30.event';
import { bridgemary } from '../_locations/bridgemary.location';
import { woking } from '../_locations/woking.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rufus: IBear = {
  Id: 'rufus',
  Name: 'Rufus',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 5, 2),
  },
  Event: E20191130,
  Rehomed: {
    Location: woking,
    Date: new Date(2019, 10, 30),
  },
};
