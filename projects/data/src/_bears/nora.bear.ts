import { ely } from '../_locations/ely.location';
import { hook } from '../_locations/hook.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const nora: IBear = {
  Id: 'nora',
  Name: 'Nora',
  UploadedOn: new Date(2022, 3, 24),
  Type: BearType.PlushCompany,
  Rescued: {
    Location: ely,
    Date: new Date(2021, 8, 19),
  },
  Sold: null,
  Rehomed: {
    Location: hook,
    Date: new Date(2022, 11, 27),
  },
};
