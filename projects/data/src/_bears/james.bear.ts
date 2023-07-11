import { E20210925 } from '../_events/E2021-09-25.event';
import { bridgemary } from '../_locations/bridgemary.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const james: IBear = {
  Id: 'james',
  Name: 'James',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: BearBrandEnum.RussBear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 5, 2),
  },
  Event: E20210925,
  Rehomed: {
    Location: waltonUponThames,
    Date: new Date(2021, 8, 25),
  },
};
