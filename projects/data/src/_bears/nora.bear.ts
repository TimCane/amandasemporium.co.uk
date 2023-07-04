import { E20221127 } from '../_events/E2022-11-27.event';
import { ely } from '../_locations/ely.location';
import { hook } from '../_locations/hook.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const nora: IBear = {
  Id: 'nora',
  Name: 'Nora',
  UploadedOn: new Date(2022, 3, 24),
  Type: {
    Type: BearTypeEnum.PlushCompany,
  },
  Rescued: {
    Location: ely,
    Date: new Date(2021, 7, 19),
  },
  Event: E20221127,
  Rehomed: {
    Location: hook,
    Date: new Date(2022, 10, 27),
  },
};
