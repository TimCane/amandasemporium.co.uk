import { E20180929 } from '../_events/E2018-09-29.event';
import { ripley } from '../_locations/ripley.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const elsie: IBear = {
  Id: 'elsie',
  Name: 'Elsie',
  UploadedOn: new Date(2018, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 5, 10),
  },
  Event: E20180929,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2018, 8, 29),
  },
};
