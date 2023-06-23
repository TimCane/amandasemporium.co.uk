import { addlestone } from '../_locations/addlestone.location';
import { guildford } from '../_locations/guildford.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const thomas: IBear = {
  Id: 'thomas',
  Name: 'Thomas',
  UploadedOn: new Date(2019, 11, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2019, 11, 7),
  },
  Sold: null,
  Rehomed: {
    Location: guildford,
    Date: new Date(2022, 7, 17),
  },
};
