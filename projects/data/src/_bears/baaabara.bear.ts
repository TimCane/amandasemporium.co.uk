import { addlestone } from '../_locations/addlestone.location';
import { leatherhead } from '../_locations/leatherhead.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const baaabara: IBear = {
  Id: 'baaabara',
  Name: 'Baaabara',
  UploadedOn: new Date(2021, 9, 7),
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2019, 10, 14),
  },
  Event: null,
  Rehomed: {
    Location: leatherhead,
    Date: new Date(2022, 3, 23),
  },
};
