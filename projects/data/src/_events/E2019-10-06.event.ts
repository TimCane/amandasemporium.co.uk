import { horsham } from '../_locations/horsham.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20191006: IEvent = {
  Id: '2019-10-06-horsham-market',
  Name: 'Horsham Market',
  Date: new Date(2019, 9, 6),
  Description: '',
  Location: {
    Name: 'Carfax, Horsham, RH12 1EQ.',
    Location: horsham,
  },
  Website: 'https://www.foodrockssouth.co.uk/horshammarkets/',
  Time: '10am - 3pm',
};
