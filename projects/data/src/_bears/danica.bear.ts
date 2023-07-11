import { hunston } from '../_locations/hunston.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const danica: IBear = {
  Id: 'danica',
  Name: 'Danica',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Type: {
    Type: BearTypeEnum.Wilkinson,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2023, 3, 30),
  },
  Event: null,
  Rehomed: null,
};
