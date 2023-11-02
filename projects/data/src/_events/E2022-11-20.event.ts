import { andover } from '../_locations/andover.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20221120: IEvent = {
  Id: '2022-11-20-andover-artisan-market',
  Name: 'Andover Artisan Market',
  Date: new Date(2022, 10, 20),
  Description: '',
  Location: {
    Name: 'Andover High Street, Andover SP10 1LJ.',
    Location: andover,
  },
  Website: '',
  Time: '10am - 2pm',
};
