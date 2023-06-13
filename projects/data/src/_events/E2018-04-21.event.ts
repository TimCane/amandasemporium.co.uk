import { horley } from '../_locations/horley.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20180421: IEvent = {
  Id: '2018-04-21-horley-high-street',
  Name: 'Horley High Street',
  Date: new Date(2018, 3, 21),
  Description: 'St Georges Day',
  Location: {
    Name: 'Horley High Street, RH6 7AY.',
    Location: horley,
  },
  Website: '',
  Time: '',
};
