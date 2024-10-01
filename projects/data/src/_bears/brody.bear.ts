import { buildABear } from "../_bear-brands/build-a-bear.bear-brand";
import { dog } from "../_bear-species/dog.bear-species";
import { woking } from "../_locations/woking.location";
import { IBear } from "../public-api";

export const brody: IBear = {
  Id: 'brody',
  Name: 'Brody',
  Description: ``,
  UploadedOn: new Date(2024, 9, 1),
  Info: {
    Brand: buildABear,
    Species: dog,
  },
  Rescued: {
    Location: woking,
    Date: new Date(2024, 8, 14),
  },
  Event: null,
  Rehomed: null,
};
