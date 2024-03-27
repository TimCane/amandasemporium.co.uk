import { andover } from '../_locations/andover.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20240721: IEvent = {
  Id: '2024-07-21-andover-carnival',
  Name: 'Andover Carnival',
  Date: new Date(2024, 6, 21),
  Description: '',
  Location: {
    Name: 'Vigo Recreation Ground, Andover SP10 1HH.',
    Location: andover,
  },
  Website: 'https://www.inandover.co.uk/events/andover-carnival/',
  Time: '12pm - 9pm',
};
