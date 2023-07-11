import { E20230617 } from '../_events/E2023-06-17.event';
import { hartleyWintney } from '../_locations/hartleyWintney.location';
import { ruislip } from '../_locations/ruislip.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const freya: IBear = {
  Id: 'freya',
  Name: 'Freya',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: ruislip,
    Date: new Date(2022, 11, 21),
  },
  Event: E20230617,
  Rehomed: {
    Location: hartleyWintney,
    Date: new Date(2023, 5, 17),
  },
};
