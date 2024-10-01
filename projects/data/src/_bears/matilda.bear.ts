import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { sheep } from "../_bear-species/sheep.bear-species";
import { E20240928 } from "../_events/E2024-09-28.event";
import { addlestone } from "../_locations/addlestone.location";
import { kingston } from "../_locations/kingston.location";
import { IBear } from "../public-api";

export const matilda: IBear = {
  Id: 'matilda',
  Name: 'Matilda',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: sheep,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2024, 5, 1),
  },
  Event: E20240928,
  Rehomed: {
    Location: kingston,
    Date: new Date(2024, 8, 28),
  },
};
