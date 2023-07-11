import { E20230625 } from '../_events/E2023-06-25.event';
import { ruislip } from '../_locations/ruislip.location';
import { thatcham } from '../_locations/thatcham.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const roger: IBear = {
  Id: 'roger',
  Name: 'Roger',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Dog,
  },
  Rescued: {
    Location: ruislip,
    Date: new Date(2022, 9, 17),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: thatcham,
  },
};
