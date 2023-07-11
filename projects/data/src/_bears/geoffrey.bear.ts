import { E20220924 } from '../_events/E2022-09-24.event';
import { longDitton } from '../_locations/longDitton.location';
import { sidlesham } from '../_locations/sidlesham.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const geoffrey: IBear = {
  Id: 'geoffrey',
  Name: 'Geoffrey',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: sidlesham,
    Date: new Date(2022, 4, 7),
  },
  Event: E20220924,
  Rehomed: {
    Location: longDitton,
    Date: new Date(2022, 8, 24),
  },
};
