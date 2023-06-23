import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sidney: IBear = {
  Id: 'sidney',
  Name: 'Sidney',
  UploadedOn: new Date(2023, 5, 20),
  Type: BearType.RussBear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: null,
  Rehomed: null,
};
