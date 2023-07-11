import { E20190525 } from '../_events/E2019-05-25.event';
import { addlestone } from '../_locations/addlestone.location';
import { greenwich } from '../_locations/greenwich.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const amelia: IBear = {
  Id: 'amelia',
  Name: 'Amelia',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: BearBrandEnum.GloriousBritainJointedBear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2018, 2, 21),
  },
  Event: E20190525,
  Rehomed: {
    Location: greenwich,
    Date: new Date(2019, 4, 25),
  },
};
