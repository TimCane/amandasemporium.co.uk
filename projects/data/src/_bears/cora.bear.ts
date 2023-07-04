import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cora: IBear = {
  Id: 'cora',
  Name: 'Cora',
  Description: `Meet Cora, the lovable teddy bear with a special fondness for apples! With her fluffy fur, adorable smile, and a twinkle in her eyes, Cora is the apple of everyone's eye.
  Cora's apple adventures are legendary. From picking apples in orchards to baking delicious apple pies, she loves to explore different ways to incorporate her favorite fruit into her activities. She's always eager to share recipes, teach you about apple-related trivia, or simply enjoy a picnic under the shade of an apple tree.
  So, if you're looking for a companion who shares your love for apples and brings a sense of warmth and joy to your world, Cora the apple-loving teddy bear is the perfect choice. Get ready for apple-filled adventures and heartwarming moments with this delightful and friendly companion!`,
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: null,
  Rehomed: null,
};
