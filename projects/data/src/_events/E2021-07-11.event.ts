import { horsham } from '../_locations/horsham.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20210711: IEvent = {
  Id: '2021-07-11-horsham-market-postponed',
  Name: 'Horsham Market (Postponed)',
  Date: new Date(2021, 6, 11),
  Description: '',
  Location: {
    Name: 'Carfax, Horsham, RH12 1EQ.',
    Location: horsham,
  },
  Website: 'https://www.foodrockssouth.co.uk/horshammarkets/',
  Time: '10am - 3pm',
};
