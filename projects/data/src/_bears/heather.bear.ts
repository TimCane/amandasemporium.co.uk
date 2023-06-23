import { E20220924 } from '../_events/E2022-09-24.event';
import { newbury } from '../_locations/newbury.location';
import { richmond } from '../_locations/richmond.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const heather: IBear = {
  Id: 'heather',
  Name: 'Heather',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.Unknown,
  Rescued: {
    Location: newbury,
    Date: new Date(2021, 9, 8),
  },
  Event: E20220924,
  Rehomed: {
    Location: richmond,
    Date: new Date(2022, 8, 24),
  },
};
