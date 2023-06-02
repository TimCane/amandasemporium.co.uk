import { surbiton } from '../_locations/surbiton.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20200926: IEvent = {
  Id: '2020-09-26-surbiton-festival',
  Name: 'Surbiton Festival',
  Date: new Date(2020, 8, 26),
  Description: '',
  Location: {
    Name: 'Claremont Gardens, KT6 4TN.',
    Location: surbiton,
  },
  Website: 'https://www.surbitonfestival.co.uk/',
  Time: '12pm - 5pm',
};
