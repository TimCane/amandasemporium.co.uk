import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { rabbit } from "../_bear-species/rabbit.bear-species";
import { E20240928 } from "../_events/E2024-09-28.event";
import { surbiton } from "../_locations/surbiton.location";
import { suttonGreen } from "../_locations/suttonGreen.location";
import { IBear } from "../public-api";

export const celeste: IBear = {
  Id: 'celeste',
  Name: 'Celeste',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: suttonGreen,
    Date: new Date(2023, 8, 17),
  },
  Event: E20240928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2024, 8, 28),
  },
};