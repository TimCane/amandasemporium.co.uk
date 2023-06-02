import { windsor } from '../_locations/windsor.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20190414: IEvent = {
  Id: '2019-04-14-windsor-spring-food-home-and-craft-fair',
  Name: 'Windsor Spring Food, Home & Craft Fair',
  Date: new Date(2019, 3, 14),
  Description: 'Tickets on the gate, adults £6, free carpark.',
  Location: {
    Name: 'Royal Windsor Racecourse, SL4 5EZ.',
    Location: windsor,
  },
  Website:
    'https://www.oakleighfairs.co.uk/windsor-spring-food-crafts-fair-saturday-13-sunday-14-april-2019/',
  Time: '10am - 4pm',
};
