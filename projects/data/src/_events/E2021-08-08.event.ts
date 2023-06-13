import { maidenhead } from '../_locations/maidenhead.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20210808: IEvent = {
  Id: '2021-08-08-fifield-fun-day',
  Name: 'Fifield Fun Day',
  Date: new Date(2021, 7, 8),
  Description: '',
  Location: {
    Name: 'Fifield Rd, Maidenhead SL6 2DX.',
    Location: maidenhead,
  },
  Website: 'https://www.facebook.com/FifieldFunDay/',
  Time: '1pm - 4pm',
};
