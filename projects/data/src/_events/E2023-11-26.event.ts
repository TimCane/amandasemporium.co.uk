import { odiham } from '../_locations/odiham.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20231126: IEvent = {
  Id: '2023-11-26-christmas-extravaganza',
  Name: 'Christmas Extravaganza',
  Date: new Date(2023, 10, 26),
  Description: '',
  Location: {
    Name: 'Odiham High Street, RG29 1LB.',
    Location: odiham,
  },
  Website: 'https://odihamparishcouncil.gov.uk/events/3425',
  Time: '2pm - 7pm',
};
