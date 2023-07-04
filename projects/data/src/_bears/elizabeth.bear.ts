import { E20190413 } from '../_events/E2019-04-13.event';
import { ashford } from '../_locations/ashford.location';
import { chertseySouth } from '../_locations/chertseySouth.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const elizabeth: IBear = {
  Id: 'elizabeth',
  Name: 'Elizabeth',
  UploadedOn: new Date(2019, 3, 7),
  Type: {
    Type: BearTypeEnum.ILoveFancyDressBear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 0, 8),
  },
  Event: E20190413,
  Rehomed: {
    Location: chertseySouth,
    Date: new Date(2019, 3, 13),
  },
};
