import { farnborough } from '../_locations/farnborough.location';
import { farnham } from '../_locations/farnham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const stella: IBear = {
  Id: 'stella',
  Name: 'Stella',
  UploadedOn: new Date(2021, 7, 11),
  Type: BearType.SainsburysBear,
  Rescued: {
    Location: farnborough,
    Date: new Date(2020, 0, 11),
  },
  Sold: null,
  Rehomed: {
    Location: farnham,
    Date: new Date(2021, 7, 14),
  },
};
