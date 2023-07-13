import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20220820 } from '../_events/E2022-08-20.event';
import { churchCrookham } from '../_locations/churchCrookham.location';
import { crowborough } from '../_locations/crowborough.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const sunny: IBear = {
  Id: 'sunny',
  Name: 'Sunny',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: crowborough,
    Date: new Date(2022, 3, 26),
  },
  Event: E20220820,
  Rehomed: {
    Location: churchCrookham,
    Date: new Date(2022, 7, 20),
  },
};
