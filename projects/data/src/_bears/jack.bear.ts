import { E20181202 } from '../_events/E2018-12-02.event';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { wisley } from '../_locations/wisley.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { gloriousBritainJointed } from './_brands/glorious-britain-jointed.bear-brand';
import { bear } from './_species/bear.bear-species';

export const jack: IBear = {
  Id: 'jack',
  Name: 'Jack',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: gloriousBritainJointed,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 3, 18),
  },
  Event: E20181202,
  Rehomed: {
    Location: wisley,
    Date: new Date(2018, 11, 2),
  },
};
