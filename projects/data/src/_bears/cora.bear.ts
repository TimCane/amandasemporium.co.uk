import { E20230709 } from '../_events/E2023-07-09.event';
import { guildford } from '../_locations/guildford.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cora: IBear = {
  Id: 'cora',
  Name: 'Cora',
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
  Event: E20230709,
  Rehomed: {
    Location: guildford,
    Date: new Date(2023, 6, 9),
  },
};
