import { addlestone } from '../_locations/addlestone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const luna: IBear = {
  Id: 'luna',
  Name: 'Luna',
  Description: `Introducing Luna, the delightful long-eared dog teddy bear! With her plush fur, endearing floppy ears, and a heart full of warmth, Luna is the perfect cuddly companion for dog lovers of all ages.
  Luna's long ears are a key part of her charm. They dangle gracefully, giving her a distinctive and lovable appearance. When you give her a gentle squeeze, she's always ready to listen, offering comfort and a sense of companionship.
  Luna's friendly nature reflects the loyalty and affection that dogs are known for. She embodies the spirit of a true canine companion, always by your side with a wagging imaginary tail and a loving smile. Luna is the perfect snuggle buddy when you need a cozy friend to lean on.
  While Luna may be a teddy bear, she carries the spirit of a playful and spirited dog. She's always up for an imaginary game of fetch or a pretend walk in the park. Luna's joyous presence reminds us to embrace our inner child, to find delight in the simplest of activities, and to cherish the bonds we share with our furry friends.
  As a confidante, Luna is an excellent listener. With her patient eyes and attentive expression, she creates a safe space where you can share your thoughts, dreams, and worries. Luna understands the power of a comforting presence and is there to offer support and a soft embrace when you need it most.
  With Luna by your side, every day becomes a joyful adventure. Whether you're exploring imaginary worlds, sharing stories and secrets, or simply enjoying a quiet moment together, Luna's long-eared dog charm will warm your heart and bring a smile to your face.
  So, if you're looking for a furry friend who embodies the spirit of a lovable and loyal dog, Luna the long-eared dog teddy bear is the perfect companion. Get ready to embark on countless cuddly adventures and experience the boundless love and friendship that Luna brings to your world!`,
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
