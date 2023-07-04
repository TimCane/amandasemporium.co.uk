import { E20221127 } from '../_events/E2022-11-27.event';
import { addlestone } from '../_locations/addlestone.location';
import { odiham } from '../_locations/odiham.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const elsa: IBear = {
  Id: 'elsa',
  Name: 'Elsa',
  UploadedOn: new Date(2022, 10, 18),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 10, 14),
  },
  Event: E20221127,
  Rehomed: {
    Location: odiham,
    Date: new Date(2022, 10, 27),
  },
};
