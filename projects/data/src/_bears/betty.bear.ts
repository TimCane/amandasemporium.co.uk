import { E20230625 } from '../_events/E2023-06-25.event';
import { shepperton } from '../_locations/shepperton.location';
import { thatcham } from '../_locations/thatcham.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const betty: IBear = {
  Id: 'betty',
  Name: 'Betty',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: thatcham,
  },
};
