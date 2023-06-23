import { fleet } from '../_locations/fleet.location';
import { folkstone } from '../_locations/folkstone.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const edison: IBear = {
  Id: 'edison',
  Name: 'Edison',
  UploadedOn: new Date(2021, 6, 16),
  Type: BearType.BuildABear,
  Rescued: {
    Location: folkstone,
    Date: new Date(2020, 9, 1),
  },
  Sold: null,
  Rehomed: {
    Location: fleet,
    Date: new Date(2022, 7, 20),
  },
};
