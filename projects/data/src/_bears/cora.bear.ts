import { E20230709 } from '../_events/E2023-07-09.event';
import { guildford } from '../_locations/guildford.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cora: IBear = {
  Id: 'cora',
  Name: 'Cora',
  Description: `Meet Cora, the lovable teddy bear with a special fondness for apples! With her fluffy fur, adorable smile, and a twinkle in her eyes, Cora is the apple of everyone's eye.
  Cora's love for apples is infectious. She can often be found with a basket of crisp, juicy apples by her side, ready to share the fruity goodness with her friends. She knows all the different varieties, from Granny Smith to Honeycrisp, and can even give you tips on the best ways to enjoy them.
  But Cora's affection for apples goes beyond just the taste. She sees apples as symbols of health, vitality, and nature's bounty. Their vibrant colors and refreshing flavor remind her of the wonders of the natural world and the simple pleasures it provides.
  Cora's apple adventures are legendary. From picking apples in orchards to baking delicious apple pies, she loves to explore different ways to incorporate her favorite fruit into her activities. She's always eager to share recipes, teach you about apple-related trivia, or simply enjoy a picnic under the shade of an apple tree.
  Cora's warm and nurturing nature extends beyond her love for apples. She's a true friend, always ready to lend a paw, offer comfort, and provide a listening ear. Whether you need a hug or someone to share your apple-themed stories with, Cora is there with open arms.
  With Cora, every day becomes a celebration of nature's bounty and the joys of friendship. Her enthusiasm for apples is contagious, and she'll inspire you to appreciate the simple pleasures in life, savor every bite, and find delight in the little things.
  So, if you're looking for a companion who shares your love for apples and brings a sense of warmth and joy to your world, Cora the apple-loving teddy bear is the perfect choice. Get ready for apple-filled adventures and heartwarming moments with this delightful and friendly companion!`,
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: E20230709,
  Rehomed: {
    Location: guildford,
    Date: new Date(2023, 6, 9),
  },
};
