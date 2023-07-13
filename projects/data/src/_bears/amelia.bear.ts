import { gloriousBritainJointed } from '../_bear-brands/glorious-britain-jointed.bear-brand';
import { E20190525 } from '../_events/E2019-05-25.event';
import { addlestone } from '../_locations/addlestone.location';
import { greenwich } from '../_locations/greenwich.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const amelia: IBear = {
  Id: 'amelia',
  Name: 'Amelia',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: gloriousBritainJointed,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2018, 2, 21),
  },
  Event: E20190525,
  Rehomed: {
    Location: greenwich,
    Date: new Date(2019, 4, 25),
  },
};
