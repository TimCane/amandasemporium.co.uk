import { surbiton } from '../_locations/surbiton.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20220924: IEvent = {
  Id: '2022-09-24-surbiton-festival',
  Name: 'Surbiton Festival',
  Date: new Date(2022, 8, 24),
  Description: '',
  Location: {
    Name: 'Claremont Gardens, KT6 4TN.',
    Location: surbiton,
  },
  Website: 'https://www.surbitonfestival.co.uk/',
  Time: '10am - 5pm',
};
