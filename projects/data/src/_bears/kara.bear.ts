import { guildford } from '../_locations/guildford.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const kara: IBear = {
  Id: 'kara',
  Name: 'Kara',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.KeelTeddybear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: guildford,
    Date: new Date(2022, 7, 7),
  },
  Event: null,
  Rehomed: null,
};
