import { keelTeddy } from '../_brands/keel-teddy.bear-brand';
import { guildford } from '../_locations/guildford.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const kara: IBear = {
  Id: 'kara',
  Name: 'Kara',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: keelTeddy,
    Species: bear,
  },
  Rescued: {
    Location: guildford,
    Date: new Date(2022, 7, 7),
  },
  Event: null,
  Rehomed: null,
};
