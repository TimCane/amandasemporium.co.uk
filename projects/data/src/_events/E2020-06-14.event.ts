import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { IEvent } from '../lib/interfaces/event.interface';

export const E20200614: IEvent = {
  Id: '2020-06-14-shynefest',
  Name: 'Shynefest',
  Date: new Date(2020, 5, 14),
  Description: 'Music festival, Buy tickets in advanced.',
  Location: {
    Name: 'Apps Court Farm, Walton-on-Thames, KT12 2EG.',
    Location: waltonUponThames,
  },
  Website: 'https://www.shynefest.uk',
  Time: '',
};
