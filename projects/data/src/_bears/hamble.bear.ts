import { E20190817 } from '../_events/E2019-08-17.event';
import { farnham } from '../_locations/farnham.location';
import { kingsbridge } from '../_locations/kingsbridge.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hamble: IBear = {
  Id: 'hamble',
  Name: 'Hamble',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: kingsbridge,
    Date: new Date(2019, 5, 12),
  },
  Event: E20190817,
  Rehomed: {
    Location: farnham,
    Date: new Date(2019, 7, 17),
  },
};
