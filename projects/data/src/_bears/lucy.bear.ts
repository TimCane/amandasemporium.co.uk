import { keelTeddy } from '../_bear-brands/keel-teddy.bear-brand';
import { E20181202 } from '../_events/E2018-12-02.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { send } from '../_locations/send.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const lucy: IBear = {
  Id: 'lucy',
  Name: 'Lucy',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: keelTeddy,
    Species: bear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181202,
  Rehomed: {
    Location: send,
    Date: new Date(2018, 11, 2),
  },
};
