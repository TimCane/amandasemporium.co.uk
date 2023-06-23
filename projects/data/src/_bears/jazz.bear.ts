import { E20221120 } from '../_events/E2022-11-20.event';
import { sidlesham } from '../_locations/sidlesham.location';
import { tidworth } from '../_locations/tidworth.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jazz: IBear = {
  Id: 'jazz',
  Name: 'Jazz',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.BuildABear,
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
