import { ripley } from '../_locations/ripley.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20221204: IEvent = {
  Id: '2022-12-04-ripley-christmas-fair',
  Name: 'Ripley Christmas Fair',
  Date: new Date(2022, 11, 4),
  Description: '',
  Location: {
    Name: 'Ripley High Street, GU23 6BB.',
    Location: ripley,
  },
  Website: '',
  Time: '12pm - 4:30pm',
};
