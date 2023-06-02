import { burnham } from '../_locations/burnham.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20190525: IEvent = {
  Id: '2019-05-25-burnham-donkey-derby',
  Name: 'Burnham Donkey Derby',
  Date: new Date(2019, 4, 25),
  Description: '',
  Location: {
    Name: 'Burnham Park. SL1 6DR',
    Location: burnham,
  },
  Website: 'https://www.burnhamdonkeyderby.co.uk/',
  Time: '12pm - 5pm',
};
