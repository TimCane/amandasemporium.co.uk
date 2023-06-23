import { addlestone } from '../_locations/addlestone.location';
import { fetcham } from '../_locations/fetcham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const pandora: IBear = {
  Id: 'pandora',
  Name: 'Pandora',
  UploadedOn: new Date(2022, 10, 18),
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 11, 14),
  },
  Sold: null,
  Rehomed: {
    Location: fetcham,
    Date: new Date(2022, 11, 4),
  },
};
