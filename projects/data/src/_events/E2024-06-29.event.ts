import { farnham } from '../_locations/farnham.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20240629: IEvent = {
  Id: '2024-06-29-farnham-carnival',
  Name: 'Farnham Carnival',
  Date: new Date(2024, 5, 29),
  Description: '',
  Location: {
    Name: 'Gostrey Meadow, Farnham. GU9 7RH.',
    Location: farnham,
  },
  Website: 'https://farnhamcarnival.org.uk/',
  Time: '2pm - 9pm',
};
