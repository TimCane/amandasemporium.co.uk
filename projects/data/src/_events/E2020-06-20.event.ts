import { alton } from '../_locations/alton.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20200620: IEvent = {
  Id: '2020-06-20-alton-regency-day',
  Name: 'Alton Regency Day',
  Date: new Date(2020, 5, 20),
  Description: '',
  Location: {
    Name: 'Alton Highstreet, GU34 1AB',
    Location: alton,
  },
  Website: '',
  Time: '10am - 3pm',
};
