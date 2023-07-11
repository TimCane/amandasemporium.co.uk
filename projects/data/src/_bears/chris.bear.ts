import { bognor } from '../_locations/bognor.location';
import { weybridge } from '../_locations/weybridge.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const chris: IBear = {
  Id: 'chris',
  Name: 'Chris',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: weybridge,
    Date: new Date(2019, 2, 29),
  },
  Event: null,
  Rehomed: {
    Location: bognor,
    Date: new Date(2019, 6, 14),
  },
};
