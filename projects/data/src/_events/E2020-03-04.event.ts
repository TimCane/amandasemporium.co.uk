import { sunbury } from '../_locations/sunbury.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20200304: IEvent = {
  Id: '2020-03-04-bp-sunbury',
  Name: 'BP Sunbury',
  Date: new Date(2020, 2, 4),
  Description: 'In house only',
  Location: {
    Name: 'BP Sunbury, Sunbury-on-Thames TW16 7LN.',
    Location: sunbury,
  },
  Website: '',
  Time: '',
};
