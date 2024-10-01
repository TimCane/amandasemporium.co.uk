import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { E20240928 } from "../_events/E2024-09-28.event";
import { ockham } from "../_locations/ockham.location";
import { putney } from "../_locations/putney.location";
import { IBear } from "../public-api";
import { bear } from "./bear.bear";

export const quincy: IBear = {
  Id: 'quincy',
  Name: 'Quincy',
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
  Event: E20240928,
  Rehomed: {
    Location: putney,
    Date: new Date(2024, 8, 28),
  },
};
