import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { rabbit } from "../_bear-species/rabbit.bear-species";
import { westWittering } from "../_locations/westWittering.location";
import { IBear } from "../public-api";

export const flopsy: IBear = {
  Id: 'flopsy',
  Name: 'Flopsy',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: westWittering,
    Date: new Date(2024, 5, 9),
  },
  Event: null,
  Rehomed: null,
};
