import { E20221204 } from '../_events/E2022-12-04.event';
import { addlestone } from '../_locations/addlestone.location';
import { ashVale } from '../_locations/ashVale.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jessica: IBear = {
  Id: 'jessica',
  Name: 'Jessica',
  Description: ``,
  UploadedOn: new Date(2022, 11, 2),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Rabbit,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 10, 4),
  },
  Event: E20221204,
  Rehomed: {
    Location: ashVale,
    Date: new Date(2022, 11, 4),
  },
};
