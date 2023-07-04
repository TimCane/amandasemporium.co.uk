import { woking } from '../_locations/woking.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const wendy: IBear = {
  Id: 'wendy',
  Name: 'Wendy',
  Description: `Meet Wendy, the whimsical teddy bear with an unwavering love for unicorns! With her soft and huggable fur, twinkling eyes, and a magical spirit, Wendy is sure to capture your heart.
  As a friend, Wendy is loyal, caring, and always ready for a magical adventure. She'll listen to your dreams, share stories of fantastical creatures, and inspire you to chase your own dreams with determination and optimism. Wendy's presence is a constant reminder that the world is full of possibilities, and that believing in the extraordinary can make every day a bit more magical.
  So, if you're looking for a friend who shares your love for unicorns and brings a touch of enchantment to your world, Wendy the unicorn-loving teddy bear is the perfect companion. Together, you'll explore the realms of imagination, ignite your creativity, and celebrate the power of believing in something extraordinary. Get ready for a journey filled with wonder, joy, and the magic of friendship!`,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.WHSmithBear,
  },
  Rescued: {
    Location: woking,
    Date: new Date(2022, 10, 1),
  },
  Event: null,
  Rehomed: null,
};
