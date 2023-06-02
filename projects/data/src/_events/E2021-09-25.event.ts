import { surbiton } from '../_locations/surbiton.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20210925: IEvent = {
  Id: '2021-09-25-surbiton-festival',
  Name: 'Surbiton Festival',
  Date: new Date(2021, 8, 25),
  Description: '',
  Location: {
    Name: 'Claremont Gardens, KT6 4TN.',
    Location: surbiton,
  },
  Website: 'https://www.surbitonfestival.co.uk/',
  Time: '12pm - 5pm',
};
