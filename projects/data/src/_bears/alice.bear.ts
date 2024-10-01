import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { E20240928 } from "../_events/E2024-09-28.event";
import { horley } from "../_locations/horley.location";
import { surbiton } from "../_locations/surbiton.location";
import { IBear } from "../public-api";
import { bear } from "./bear.bear";

export const alice: IBear = {
  Id: 'alice',
  Name: 'Alice',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: horley,
    Date: new Date(2024, 3, 20),
  },
  Event: E20240928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2024, 8, 28),
  },
};
