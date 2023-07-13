import { keelTeddy } from '../_brands/keel-teddy.bear-brand';
import { E20191201 } from '../_events/E2019-12-01.event';
import { horsley } from '../_locations/horsley.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const bunty: IBear = {
  Id: 'bunty',
  Name: 'Bunty',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: keelTeddy,
    Species: bear,
  },
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 8, 13),
  },
  Event: E20191201,
  Rehomed: {
    Location: horsley,
    Date: new Date(2019, 11, 1),
  },
};
