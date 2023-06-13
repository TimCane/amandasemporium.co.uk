import { surbiton } from '../_locations/surbiton.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20230923: IEvent = {
  Id: '2023-09-23-surbiton-festival',
  Name: 'Surbiton Festival',
  Date: new Date(2023, 8, 23),
  Description: '',
  Location: {
    Name: 'Claremont Gardens, KT6 4TN.',
    Location: surbiton,
  },
  Website: 'https://www.surbitonfestival.co.uk/',
  Time: '12pm - 5pm',
};
