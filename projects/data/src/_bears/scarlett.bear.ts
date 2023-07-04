import { addlestone } from '../_locations/addlestone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const scarlett: IBear = {
  Id: 'scarlett',
  Name: 'Scarlett',
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2021, 10, 6),
  },
  Event: null,
  Rehomed: null,
};
