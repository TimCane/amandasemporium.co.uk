import { morden } from '../_locations/morden.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20220717: IEvent = {
  Id: '2022-07-17-morden-family-funday',
  Name: 'Morden Family Funday',
  Date: new Date(2022, 6, 17),
  Description: '',
  Location: {
    Name: 'Morden Sports Ground. SM4 5AD',
    Location: morden,
  },
  Website: 'https://www.mordenfunday.com/',
  Time: '10:30pm - 5pm',
};
