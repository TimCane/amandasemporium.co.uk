import { E20191201 } from '../_events/E2019-12-01.event';
import { ashford } from '../_locations/ashford.location';
import { rowtown } from '../_locations/rowtown.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lola: IBear = {
  Id: 'lola',
  Name: 'Lola',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 7, 21),
  },
  Event: E20191201,
  Rehomed: {
    Location: rowtown,
    Date: new Date(2019, 11, 1),
  },
};
