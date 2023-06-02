import { basingstoke } from '../_locations/basingstoke.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20200704: IEvent = {
  Id: '2020-07-04-winklebury',
  Name: 'Winklebury',
  Date: new Date(2020, 6, 4),
  Description: '',
  Location: {
    Name: 'Winklebury Way, Basingstoke, RG23 8QP.',
    Location: basingstoke,
  },
  Website: 'http://winkleburygala.co.uk/',
  Time: '1pm - 5pm',
};
