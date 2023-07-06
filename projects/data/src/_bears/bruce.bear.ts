import { E20190928 } from '../_events/E2019-09-28.event';
import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bruce: IBear = {
  Id: 'bruce',
  Name: 'Bruce',
  Description: `Introducing Bruce, the teddy bear with a mighty alter ego—the Hulk! With his strong and muscular appearance, intense green color, and a heart filled with power, Bruce is the perfect companion for those who admire strength, resilience, and the power of transformation.
  Bruce's Hulk persona reflects his incredible strength and indomitable spirit. He embodies the power of the Hulk, with his green fur symbolizing his incredible might. Bruce carries within him the capacity for immense power, yet his gentle nature ensures that he only uses it for good.
  As a friend, Bruce is kind-hearted, protective, and always ready to lend a helping paw. He understands the importance of using strength responsibly and helping those in need. Bruce's presence provides a sense of security and reassurance, reminding you that you have a powerful friend who will stand up for you.
  Bruce's adventures are filled with the thrill of heroic acts and the triumph of good over evil. Whether he's leaping across imaginary cityscapes, saving the day, or simply using his strength to help others, Bruce's Hulk-like abilities inspire courage and remind us of the potential for greatness that lies within us all.
  While Bruce may possess the power of the Hulk, he also values compassion and understanding. He knows that true strength comes not only from physical power but also from empathy and emotional resilience. Bruce's gentle nature and kind-heartedness make him a trusted friend, always ready to lend an ear or offer a comforting presence.
  With Bruce by your side, every day becomes an opportunity to embrace your inner strength and face challenges head-on. Whether you're engaging in imaginative play, summoning the power of the Hulk to overcome obstacles, or simply cherishing the bond of friendship, Bruce's presence will inspire you to tap into your own resilience and face the world with courage.
  So, if you're seeking a furry friend who embodies the spirit of strength and the power of transformation, Bruce the Hulk teddy bear is the perfect choice. Get ready to embark on incredible adventures, tap into your own inner power, and experience the joy and triumph that Bruce brings as you unleash your own Hulk-like strength in the face of life's challenges.`,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: bexhillOnSea,
    Date: new Date(2019, 8, 14),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
