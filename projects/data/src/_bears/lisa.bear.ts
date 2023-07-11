import { E20191201 } from '../_events/E2019-12-01.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { horsley } from '../_locations/horsley.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lisa: IBear = {
  Id: 'lisa',
  Name: 'Lisa',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Type: {
    Type: BearTypeEnum.CuddlesCollection,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 9, 12),
  },
  Event: E20191201,
  Rehomed: {
    Location: horsley,
    Date: new Date(2019, 11, 1),
  },
};
