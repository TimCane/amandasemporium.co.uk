import { ashford } from '../_locations/ashford.location';
import { chertseySouth } from '../_locations/chertseySouth.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const elizabeth: IBear = {
  Id: 'elizabeth',
  Name: 'Elizabeth',
  UploadedOn: new Date(2019, 3, 7),
  Type: BearType.ILoveFancyDressBear,
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 0, 8),
  },
  Sold: null,
  Rehomed: {
    Location: chertseySouth,
    Date: new Date(2019, 3, 13),
  },
};
