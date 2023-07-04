import { chicester } from '../_locations/chicester.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jemma: IBear = {
  Id: 'jemma',
  Name: 'Jemma',
  Description: `Meet Jemma, the lovable dog teddy bear! With her soft, plush fur, kind eyes, and a heart full of unconditional love, Jemma is the perfect companion for dog lovers of all ages.
  With Jemma by your side, every day becomes an adventure filled with love and companionship. Whether you're embarking on imaginary quests, sharing secrets and stories, or simply enjoying the comfort of her presence, Jemma's dog-like charm will warm your heart and bring a smile to your face.
  So, if you're looking for a furry friend who embodies the spirit of a loyal and playful dog, Jemma the dog teddy bear is the perfect companion. Get ready to create lasting memories and experience the boundless love and friendship that Jemma brings into your world!`,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2022, 8, 10),
  },
  Event: null,
  Rehomed: null,
};
