import { addlestone } from '../_locations/addlestone.location';
import { horley } from '../_locations/horley.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const topsy: IBear = {
  Id: 'topsy',
  Name: 'Topsy',
  Description: ``,
  UploadedOn: new Date(2022, 11, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 10, 25),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};
