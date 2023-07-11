import { E20181122 } from '../_events/E2018-11-22.event';
import { bognor } from '../_locations/bognor.location';
import { clapham } from '../_locations/clapham.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const greg: IBear = {
  Id: 'greg',
  Name: 'Greg',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: BearBrandEnum.CuddlesCollection,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: bognor,
    Date: new Date(2018, 5, 30),
  },
  Event: E20181122,
  Rehomed: {
    Location: clapham,
    Date: new Date(2018, 10, 22),
  },
};
