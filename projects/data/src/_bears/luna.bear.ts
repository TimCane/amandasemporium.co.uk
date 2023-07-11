import { addlestone } from '../_locations/addlestone.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const luna: IBear = {
  Id: 'luna',
  Name: 'Luna',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Rabbit,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Event: null,
  Rehomed: null,
};
