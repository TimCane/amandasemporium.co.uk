import { hammersmith } from '../_locations/hammersmith.location';
import { reading } from '../_locations/reading.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const angel: IBear = {
  Id: 'angel',
  Name: 'Angel',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.CuddlesCollection,
  Rescued: {
    Location: hammersmith,
    Date: new Date(2018, 9, 10),
  },
  Sold: null,
  Rehomed: {
    Location: reading,
    Date: new Date(2018, 11, 10),
  },
};
