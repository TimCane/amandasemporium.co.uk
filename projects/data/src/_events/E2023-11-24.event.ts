import { alton } from '../_locations/alton.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20231124: IEvent = {
  Id: '2023-11-24-alton-christmas-light-switch-on',
  Name: 'Alton Christmas Light Switch-On',
  Date: new Date(2023, 10, 24),
  Description: '',
  Location: {
    Name: 'Alton High Street, GU34 1AB.',
    Location: alton,
  },
  Website:
    'https://altonevents.co.uk/events/altons-christmas-lights-switch-on-2023/',
  Time: '3pm - 7pm',
};
