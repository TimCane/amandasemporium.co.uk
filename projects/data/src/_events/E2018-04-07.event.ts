import { windsor } from '../_locations/windsor.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20180407: IEvent = {
  Id: '2018-04-07-windsor-spring-food-and-craft-fair',
  Name: 'Windsor Spring Food & Craft Fair',
  Date: new Date(2018, 3, 7),
  Description: '10am til 4pm, free parking.</br> Tickets on the gate.',
  Location: {
    Name: 'Royal Windsor Racecourse, SL4 5EZ.',
    Location: windsor,
  },
  Website:
    'https://www.oakleighfairs.co.uk/windsor-spring-food-crafts-fair-saturday-7-sunday-8-april-2018/',
  Time: '',
};
