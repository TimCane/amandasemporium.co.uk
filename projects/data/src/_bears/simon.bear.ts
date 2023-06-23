import { addlestone } from '../_locations/addlestone.location';
import { upton } from '../_locations/upton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const simon: IBear = {
  Id: 'simon',
  Name: 'Simon',
  UploadedOn: new Date(2023, 4, 30),
  Type: BearType.TeddyTastic,
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Sold: null,
  Rehomed: {
    Location: upton,
    Date: new Date(2023, 5, 20),
  },
};
