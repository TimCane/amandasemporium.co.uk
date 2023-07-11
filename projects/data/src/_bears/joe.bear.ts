import { E20190817 } from '../_events/E2019-08-17.event';
import { bridgewater } from '../_locations/bridgewater.location';
import { chicester } from '../_locations/chicester.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const joe: IBear = {
  Id: 'joe',
  Name: 'Joe',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 7, 3),
  },
  Event: E20190817,
  Rehomed: {
    Location: bridgewater,
    Date: new Date(2019, 7, 17),
  },
};
