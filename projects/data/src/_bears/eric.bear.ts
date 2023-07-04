import { addlestone } from '../_locations/addlestone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const eric: IBear = {
  Id: 'eric',
  Name: 'Eric',
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.BearFactory,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Event: null,
  Rehomed: null,
};
