import { E20221120 } from '../_events/E2022-11-20.event';
import { sidlesham } from '../_locations/sidlesham.location';
import { tidworth } from '../_locations/tidworth.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const jazz: IBear = {
  Id: 'jazz',
  Name: 'Jazz',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: sidlesham,
    Date: new Date(2022, 4, 7),
  },
  Event: E20221120,
  Rehomed: {
    Location: tidworth,
    Date: new Date(2022, 10, 20),
  },
};
