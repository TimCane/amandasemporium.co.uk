import { surbiton } from '../_locations/surbiton.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20190928: IEvent = {
  Id: '2019-09-28-surbiton-festival',
  Name: 'Surbiton Festival',
  Date: new Date(2019, 8, 28),
  Description: '',
  Location: {
    Name: 'Claremont Gardens, KT6 4TN.',
    Location: surbiton,
  },
  Website: 'https://www.surbitonfestival.co.uk/',
  Time: '12pm - 5pm',
};
