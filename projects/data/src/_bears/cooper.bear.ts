import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cooper: IBear = {
  Id: 'cooper',
  Name: 'Cooper',
  Description: ``,
  UploadedOn: new Date(2022, 10, 8),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 8, 14),
  },
  Event: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 27),
  },
};
