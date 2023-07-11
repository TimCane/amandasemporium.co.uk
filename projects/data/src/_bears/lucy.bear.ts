import { E20181202 } from '../_events/E2018-12-02.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { send } from '../_locations/send.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { keelTeddy } from './_brands/keel-teddy.bear-brand';
import { bear } from './_species/bear.bear-species';

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
