import { ripley } from '../_locations/ripley.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20191201: IEvent = {
  Id: '2019-12-01-ripley-christmas-fair',
  Name: 'Ripley Christmas Fair',
  Date: new Date(2019, 11, 1),
  Description: '',
  Location: {
    Name: 'Ripley High Street, GU23 6BB.',
    Location: ripley,
  },
  Website: '',
  Time: '12am - 4:30pm',
};
