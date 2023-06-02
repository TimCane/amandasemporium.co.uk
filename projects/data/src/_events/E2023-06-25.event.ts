import { thatcham } from '../_locations/thatcham.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20230625: IEvent = {
  Id: '2023-06-25-thatcham-family-fun-day',
  Name: 'Thatcham Family Fun Day',
  Date: new Date(2023, 5, 25),
  Description: '',
  Location: {
    Name: 'Henwick Worthy Sports Ground, Thatcham RG18 3BU.',
    Location: thatcham,
  },
  Website: 'https://thatchamtowncouncil.gov.uk/events/a-familyfunday/',
  Time: '11am - 4pm',
};
