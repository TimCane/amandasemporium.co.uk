import { guildford } from '../_locations/guildford.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const kara: IBear = {
  Id: 'kara',
  Name: 'Kara',
  Description: `Introducing Kara, the extraordinary teddy bear who is secretly Superwoman in disguise! With her soft and cuddly exterior, Kara hides a powerful secret, ready to unleash her superhuman abilities to save the day.
  With her flowing cape, emblem of hope, and sparkling eyes, Superwoman Kara fearlessly takes on challenges, fighting for truth, justice, and the well-being of others. She uses her incredible powers to protect the innocent, lend a helping hand, and make the world a better place.
  With Kara by your side, you'll discover the true meaning of heroism. Whether you're facing personal challenges or simply need a reminder of your own inner strength, Kara's superpowers and indomitable spirit will inspire you to overcome obstacles and embrace the hero within.`,
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
