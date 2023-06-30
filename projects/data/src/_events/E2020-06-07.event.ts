import { windsor } from '../_locations/windsor.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20200607: IEvent = {
  Id: '2020-06-07-windsor-spring-food-home-and-craft-fair',
  Name: 'Windsor Spring Food, Home & Craft Fair',
  Date: new Date(2020, 5, 7),
  Description: 'Tickets on the gate, adults £6, free carpark',
  Location: {
    Name: 'Royal Windsor Racecourse, SL4 5EZ.',
    Location: windsor,
  },
  Website:
    'https://www.oakleighfairs.co.uk/windsor-summer-craft-food-gift-fair-saturday-6-sunday-7-june-2020/',
  Time: '10am - 4pm',
};
