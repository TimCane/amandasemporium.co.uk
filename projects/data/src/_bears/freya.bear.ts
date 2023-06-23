import { hartleyWintney } from '../_locations/hartleyWintney.location';
import { ruislip } from '../_locations/ruislip.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const freya: IBear = {
  Id: 'freya',
  Name: 'Freya',
  UploadedOn: new Date(2023, 4, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ruislip,
    Date: new Date(2022, 11, 21),
  },
  Sold: null,
  Rehomed: {
    Location: hartleyWintney,
    Date: new Date(2023, 5, 17),
  },
};
