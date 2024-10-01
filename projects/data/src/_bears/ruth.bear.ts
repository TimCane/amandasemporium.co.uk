import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { send } from "../_locations/send.location";
import { IBear } from "../public-api";
import { bear } from "./bear.bear";

export const ruth: IBear = {
  Id: 'ruth',
  Name: 'Ruth',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: send,
    Date: new Date(2024, 1, 6),
  },
  Event: null,
  Rehomed: null,
};
