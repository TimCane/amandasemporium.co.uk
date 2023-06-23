import { E20221204 } from '../_events/E2022-12-04.event';
import { addlestone } from '../_locations/addlestone.location';
import { ashVale } from '../_locations/ashVale.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jessica: IBear = {
  Id: 'jessica',
  Name: 'Jessica',
  UploadedOn: new Date(2022, 11, 2),
  Type: BearType.BuildABear,
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
