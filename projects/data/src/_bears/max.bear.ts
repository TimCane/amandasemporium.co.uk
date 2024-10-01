import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { E20240928 } from "../_events/E2024-09-28.event";
import { lymington } from "../_locations/lymington.location";
import { tolworth } from "../_locations/tolworth.location";
import { IBear } from "../public-api";
import { bear } from "./bear.bear";

export const max: IBear = {
  Id: 'max',
  Name: 'Max',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: lymington,
    Date: new Date(2024, 7, 17),
  },
  Event: E20240928,
  Rehomed: {
    Location: tolworth,
    Date: new Date(2024, 8, 28),
  },
};
