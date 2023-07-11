import { E20230617 } from '../_events/E2023-06-17.event';
import { alton } from '../_locations/alton.location';
import { chicester } from '../_locations/chicester.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const beau: IBear = {
  Id: 'beau',
  Name: 'Beau',
  Description: ``,
  UploadedOn: new Date(2022, 11, 2),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2022, 5, 18),
  },
  Event: E20230617,
  Rehomed: {
    Location: alton,
    Date: new Date(2023, 5, 17),
  },
};
