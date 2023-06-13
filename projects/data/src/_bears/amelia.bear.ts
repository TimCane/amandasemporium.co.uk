import { addlestone } from '../_locations/addlestone.location';
import { greenwich } from '../_locations/greenwich.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const amelia: IBear = {
  Id: 'amelia',
  Name: 'Amelia',
  Type: BearType.GloriousBritainJointedBear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2018, 3, 21),
  },
  Sold: null,
  Rehomed: {
    Location: greenwich,
    Date: new Date(2019, 5, 25),
  },
};
