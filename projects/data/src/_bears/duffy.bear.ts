import { E20210925 } from '../_events/E2021-09-25.event';
import { cobham } from '../_locations/cobham.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const duffy: IBear = {
  Id: 'duffy',
  Name: 'Duffy',
  UploadedOn: new Date(2019, 11, 12),
  Type: BearType.DisneyStore,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20210925,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 8, 25),
  },
};
