import { E20191201 } from '../_events/E2019-12-01.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { horsley } from '../_locations/horsley.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { cuddlesCollection } from './_brands/cuddles-collection.bear-brand';
import { bear } from './_species/bear.bear-species';

export const lisa: IBear = {
  Id: 'lisa',
  Name: 'Lisa',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: cuddlesCollection,
    Species: bear,
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
