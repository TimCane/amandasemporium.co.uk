import { E20181110 } from '../_events/E2018-11-10.event';
import { hammersmith } from '../_locations/hammersmith.location';
import { reading } from '../_locations/reading.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const angel: IBear = {
  Id: 'angel',
  Name: 'Angel',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Type: {
    Type: BearTypeEnum.CuddlesCollection,
  },
  Rescued: {
    Location: hammersmith,
    Date: new Date(2018, 8, 10),
  },
  Event: E20181110,
  Rehomed: {
    Location: reading,
    Date: new Date(2018, 10, 10),
  },
};
