import { addlestone } from '../_locations/addlestone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const luna: IBear = {
  Id: 'luna',
  Name: 'Luna',
  Description: `Introducing Luna, the delightful long-eared dog teddy bear! With her plush fur, endearing floppy ears, and a heart full of warmth, Luna is the perfect cuddly companion for dog lovers of all ages.
  While Luna may be a teddy bear, she carries the spirit of a playful and spirited dog. She's always up for an imaginary game of fetch or a pretend walk in the park. Luna's joyous presence reminds us to embrace our inner child, to find delight in the simplest of activities, and to cherish the bonds we share with our furry friends.
  With Luna by your side, every day becomes a joyful adventure. Whether you're exploring imaginary worlds, sharing stories and secrets, or simply enjoying a quiet moment together, Luna's long-eared dog charm will warm your heart and bring a smile to your face.`,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Event: null,
  Rehomed: null,
};
