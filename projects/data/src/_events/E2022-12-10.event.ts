import { horley } from '../_locations/horley.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20221210: IEvent = {
  Id: '2022-12-10-horley-christmas-fair',
  Name: 'Horley Christmas Fair',
  Date: new Date(2022, 11, 10),
  Description: '',
  Location: {
    Name: 'Horley High Street, RH6 7AY.',
    Location: horley,
  },
  Website: '',
  Time: '10am - 4pm',
};
