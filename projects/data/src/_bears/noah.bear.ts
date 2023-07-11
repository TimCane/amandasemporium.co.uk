import { E20191006 } from '../_events/E2019-10-06.event';
import { ashford } from '../_locations/ashford.location';
import { broadbridgeHeath } from '../_locations/broadbridgeHeath.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const noah: IBear = {
  Id: 'noah',
  Name: 'Noah',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.KeelTeddybear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 7, 21),
  },
  Event: E20191006,
  Rehomed: {
    Location: broadbridgeHeath,
    Date: new Date(2019, 9, 6),
  },
};
