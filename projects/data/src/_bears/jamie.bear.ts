import { E20181122 } from '../_events/E2018-11-22.event';
import { byfleet } from '../_locations/byfleet.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jamie: IBear = {
  Id: 'jamie',
  Name: 'Jamie',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181122,
  Rehomed: {
    Location: byfleet,
    Date: new Date(2018, 10, 22),
  },
};
