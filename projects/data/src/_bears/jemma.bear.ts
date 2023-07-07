import { chicester } from '../_locations/chicester.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jemma: IBear = {
  Id: 'jemma',
  Name: 'Jemma',
  Description: `Meet Jemma, the lovable dog teddy bear! With her soft, plush fur, kind eyes, and a heart full of unconditional love, Jemma is the perfect companion for dog lovers of all ages.
  Jemma's resemblance to a dog is striking. From her cute button nose to her floppy ears, she embodies the warmth and charm that make dogs such beloved companions. With every hug, Jemma offers a comforting presence, as if she can sense when you need a furry friend by your side.
  Jemma's friendly and playful nature brings joy to those around her. She loves nothing more than playtime, whether it's chasing imaginary balls, going on make-believe walks, or simply curling up for a cozy nap together. Jemma's enthusiasm is contagious, reminding us to find delight in the simple pleasures of life.
  As a loyal friend, Jemma is always there to listen and provide a shoulder to lean on. She understands the power of companionship and empathy, offering solace during difficult times and celebrating the happy moments with wagging imaginary tail and a gentle nudge.
  Jemma's love knows no bounds. She showers those around her with affection, reminding us of the incredible bond between humans and dogs. Whether you're feeling down or need a boost of love and support, Jemma is there to give you a comforting cuddle and a reassuring paw.
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
