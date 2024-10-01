import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { ockham } from "../_locations/ockham.location";
import { IBear } from "../public-api";
import { bear } from "./bear.bear";

export const zara: IBear = {
  Id: 'zara',
  Name: 'Zara',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ockham,
    Date: new Date(2024, 7, 11),
  },
  Event: null,
  Rehomed: null,
};
