import { hammersmith } from '../_locations/hammersmith.location';
import { horsham } from '../_locations/horsham.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ben: IBear = {
  Id: 'ben',
  Name: 'Ben',
  Description: ``,
  UploadedOn: new Date(2018, 10, 24),
  Info: {
    Brand: BearBrandEnum.Unknown,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: hammersmith,
    Date: new Date(2018, 8, 14),
  },
  Event: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 6, 14),
  },
};
