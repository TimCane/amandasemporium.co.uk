import { E20230709 } from '../_events/E2023-07-09.event';
import { seaford } from '../_locations/seaford.location';
import { wallington } from '../_locations/wallington.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const petal: IBear = {
  Id: 'petal',
  Name: 'Petal',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: seaford,
    Date: new Date(2023, 5, 11),
  },
  Event: E20230709,
  Rehomed: {
    Location: wallington,
    Date: new Date(2023, 6, 9),
  },
};
