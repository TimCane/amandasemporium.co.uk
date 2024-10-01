import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { E20240928 } from "../_events/E2024-09-28.event";
import { cobham } from "../_locations/cobham.location";
import { newMilton } from "../_locations/newMilton.location";
import { IBear } from "../public-api";
import { bear } from "./bear.bear";

export const ester: IBear = {
  Id: 'ester',
  Name: 'Ester',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: newMilton,
    Date: new Date(2024, 7, 20),
  },
  Event: E20240928,
  Rehomed: {
    Location: cobham,
    Date: new Date(2024, 8, 28),
  },
};
