import { chertsey } from '../_locations/chertsey.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cobey: IBear = {
  Id: 'cobey',
  Name: 'Cobey',
  Description: `Introducing Cobey, the lovable and huggable karate teddy bear! With his soft fur, gentle smile, and adorable karate uniform, Cobey is the perfect companion for kids and adults alike. Don't let his cuddly appearance fool you, though, because Cobey is also a skilled martial artist!
  Beyond his martial arts prowess, Cobey is also an excellent listener and a great friend. He's always there to lend an ear, offer a warm hug, or simply be by your side during both exciting and challenging times. Cobey teaches us the importance of kindness, compassion, and friendship.
  So, whether you're looking for a karate buddy, a snuggle partner, or a source of inspiration, Cobey the karate teddy bear is the perfect choice. Get ready to embark on exciting adventures and discover the power of martial arts with this delightful and friendly companion!`,
  UploadedOn: new Date(2022, 10, 8),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2020, 5, 1),
  },
  Event: null,
  Rehomed: null,
};
