import { emsworth } from '../_locations/emsworth.location';
import { woking } from '../_locations/woking.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const drake: IBear = {
  Id: 'drake',
  Name: 'Drake',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: emsworth,
    Date: new Date(2018, 6, 7),
  },
  Sold: null,
  Rehomed: {
    Location: woking,
    Date: new Date(2019, 11, 1),
  },
};
