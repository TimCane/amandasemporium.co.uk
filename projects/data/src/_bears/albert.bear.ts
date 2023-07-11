import { E20220924 } from '../_events/E2022-09-24.event';
import { crowborough } from '../_locations/crowborough.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const albert: IBear = {
  Id: 'albert',
  Name: 'Albert',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: crowborough,
    Date: new Date(2022, 3, 26),
  },
  Event: E20220924,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 8, 24),
  },
};
