import { andover } from '../_locations/andover.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20231117: IEvent = {
  Id: '2023-11-17-andover-christmas-festival',
  Name: 'Andover Christmas Festival',
  Date: new Date(2023, 10, 17),
  Description: '',
  Location: {
    Name: 'Andover High Street, Andover.',
    Location: andover,
  },
  Website: 'https://www.inandover.co.uk/events/christmas-festival/',
  Time: '4pm - 8pm',
};
