import { whsmith } from '../_bear-brands/whsmith.bear-brand';
import { woking } from '../_locations/woking.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { surbiton } from '../_locations/surbiton.location';
import { E20240928 } from '../_events/E2024-09-28.event';

export const wendy: IBear = {
  Id: 'wendy',
  Name: 'Wendy',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: whsmith,
    Species: bear,
  },
  Rescued: {
    Location: woking,
    Date: new Date(2022, 10, 1),
  },
  Event: E20240928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2024, 8, 28),
  },
};
