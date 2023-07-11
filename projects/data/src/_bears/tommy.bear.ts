import { E20221204 } from '../_events/E2022-12-04.event';
import { chichester } from '../_locations/chichester.location';
import { woking } from '../_locations/woking.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tommy: IBear = {
  Id: 'tommy',
  Name: 'Tommy',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 4, 21),
  },
  Event: E20221204,
  Rehomed: {
    Location: woking,
    Date: new Date(2022, 11, 4),
  },
};
