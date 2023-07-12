import { plushCompany } from '../_brands/plush-company.bear-brand';
import { E20221127 } from '../_events/E2022-11-27.event';
import { ely } from '../_locations/ely.location';
import { hook } from '../_locations/hook.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const nora: IBear = {
  Id: 'nora',
  Name: 'Nora',
  Description: ``,
  UploadedOn: new Date(2022, 3, 24),
  Info: {
    Brand: plushCompany,
    Species: bear,
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
