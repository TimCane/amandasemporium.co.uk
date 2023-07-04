import { E20190928 } from '../_events/E2019-09-28.event';
import { surbiton } from '../_locations/surbiton.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const gus: IBear = {
  Id: 'gus',
  Name: 'Gus',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 8, 13),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
