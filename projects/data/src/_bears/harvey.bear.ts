import { E20191201 } from '../_events/E2019-12-01.event';
import { send } from '../_locations/send.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const harvey: IBear = {
  Id: 'harvey',
  Name: 'Harvey',
  Description: ``,
  UploadedOn: new Date(2019, 9, 7),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 8, 13),
  },
  Event: E20191201,
  Rehomed: {
    Location: send,
    Date: new Date(2019, 11, 1),
  },
};
