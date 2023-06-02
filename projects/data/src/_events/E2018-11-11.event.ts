import { bealePark } from '../_locations/bealePark.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20181111: IEvent = {
  Id: '2018-11-11-berkshire-christmas-fair',
  Name: 'Berkshire Christmas Fair',
  Date: new Date(2018, 10, 11),
  Description: '',
  Location: {
    Name: 'Beale Park (near Reading), RG8 9NW.',
    Location: bealePark,
  },
  Website: '',
  Time: '9am - 5pm',
};
