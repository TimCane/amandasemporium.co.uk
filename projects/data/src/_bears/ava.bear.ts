import { E20230625 } from '../_events/E2023-06-25.event';
import { addlestone } from '../_locations/addlestone.location';
import { colchester } from '../_locations/colchester.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ava: IBear = {
  Id: 'ava',
  Name: 'Ava',
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 4, 18),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: colchester,
  },
};
