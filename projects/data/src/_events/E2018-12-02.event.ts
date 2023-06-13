import { ripley } from '../_locations/ripley.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20181202: IEvent = {
  Id: '2018-12-02-ripley-christmas-fair',
  Name: 'Ripley Christmas Fair',
  Date: new Date(2018, 11, 2),
  Description: '',
  Location: {
    Name: 'Ripley High Street, GU23 6BB.',
    Location: ripley,
  },
  Website: '',
  Time: '12am - 4:30pm',
};
