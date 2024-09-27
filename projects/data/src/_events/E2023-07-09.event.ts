import { morden } from '../_locations/morden.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20230709: IEvent = {
  Id: '2023-07-09-morden-family-funday',
  Name: 'Morden Family Funday',
  Date: new Date(2023, 6, 9),
  Description: '',
  Location: {
    Name: 'Morden Sports Ground. SM4 5AD.',
    Location: morden,
  },
  Website: 'https://www.mordenfunday.com/',
  Time: '10:30pm - 5pm',
};
