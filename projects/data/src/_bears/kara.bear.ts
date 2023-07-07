import { guildford } from '../_locations/guildford.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const kara: IBear = {
  Id: 'kara',
  Name: 'Kara',
  Description: `Introducing Kara, the extraordinary teddy bear who is secretly Superwoman in disguise! With her soft and cuddly exterior, Kara hides a powerful secret, ready to unleash her superhuman abilities to save the day.
  Kara may appear like an ordinary teddy bear, but don't let her appearance fool you. When danger lurks and justice needs to be served, Kara transforms into Superwoman, a beacon of strength, courage, and unwavering determination.
  With her flowing cape, emblem of hope, and sparkling eyes, Superwoman Kara fearlessly takes on challenges, fighting for truth, justice, and the well-being of others. She uses her incredible powers to protect the innocent, lend a helping hand, and make the world a better place.
  But even with her extraordinary abilities, Kara remains humble and kind-hearted. She believes in the power of compassion and empathy, using her powers not just for physical feats but also for spreading love and understanding. Kara inspires others to embrace their inner strengths and become heroes in their own right.
  As a friend, Kara is a steadfast supporter and a source of encouragement. She understands the value of a listening ear and a comforting hug. Kara's compassionate nature reminds us that we all have the power to make a difference, no matter how small our actions may seem.
  With Kara by your side, you'll discover the true meaning of heroism. Whether you're facing personal challenges or simply need a reminder of your own inner strength, Kara's superpowers and indomitable spirit will inspire you to overcome obstacles and embrace the hero within.
  So, if you're seeking a teddy bear companion who embodies the spirit of a superhero, Kara, the Superwoman in disguise, is the perfect choice. Get ready to embark on extraordinary adventures and embrace your own hidden strengths with this incredible and friendly companion!`,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.KeelTeddybear,
  },
  Rescued: {
    Location: guildford,
    Date: new Date(2022, 7, 7),
  },
  Event: null,
  Rehomed: null,
};
