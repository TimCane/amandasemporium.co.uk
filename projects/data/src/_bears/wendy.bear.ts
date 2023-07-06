import { woking } from '../_locations/woking.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const wendy: IBear = {
  Id: 'wendy',
  Name: 'Wendy',
  Description: `Meet Wendy, the whimsical teddy bear with an unwavering love for unicorns! With her soft and huggable fur, twinkling eyes, and a magical spirit, Wendy is sure to capture your heart.
  Wendy's fascination with unicorns is simply enchanting. She sees the beauty and grace in these mythical creatures and believes in their magical powers. Whether it's reading books about unicorns, collecting unicorn-themed trinkets, or even wearing a unicorn-shaped pendant, Wendy's world is filled with the wonder and joy that these majestic beings bring.
  When Wendy dreams, she imagines frolicking through meadows of rainbow flowers with her unicorn friends. Together, they embark on imaginary adventures, exploring magical lands and spreading love and joy wherever they go. Wendy's imagination is boundless, and she invites you to join her in the realm of fantasy and make-believe.
  Wendy's love for unicorns goes beyond their ethereal appearance. She sees them as symbols of kindness, purity, and the belief in the extraordinary. Wendy encourages everyone she meets to embrace their unique qualities and embrace the magic within themselves.
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
