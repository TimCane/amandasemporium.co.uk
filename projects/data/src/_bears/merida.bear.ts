import { E20221210 } from '../_events/E2022-12-10.event';
import { horley } from '../_locations/horley.location';
import { westWittering } from '../_locations/westWittering.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const merida: IBear = {
  Id: 'merida',
  Name: 'Merida',
  UploadedOn: new Date(2022, 11, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: westWittering,
    Date: new Date(2022, 9, 8),
  },
  Event: E20221210,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 11, 10),
  },
};
