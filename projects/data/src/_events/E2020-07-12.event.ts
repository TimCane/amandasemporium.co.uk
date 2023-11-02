import { horsham } from '../_locations/horsham.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20200712: IEvent = {
  Id: '2020-07-12-horsham-market',
  Name: 'Horsham Market',
  Date: new Date(2020, 6, 12),
  Description: '',
  Location: {
    Name: 'Carfax, Horsham, RH12 1EQ.',
    Location: horsham,
  },
  Website: 'https://www.foodrockssouth.co.uk/horshammarkets/',
  Time: '10am - 3pm',
};
