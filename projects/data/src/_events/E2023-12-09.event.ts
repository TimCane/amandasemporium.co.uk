import { horley } from '../_locations/horley.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20231209: IEvent = {
  Id: '2023-12-09-horley-christmas-fair',
  Name: 'Horley Christmas Fair',
  Date: new Date(2023, 11, 9),
  Description: '',
  Location: {
    Name: 'Horley High Street, RH6 7AY.',
    Location: horley,
  },
  Website: '',
  Time: '10am - 4pm',
};
