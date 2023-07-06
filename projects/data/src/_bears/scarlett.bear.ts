import { addlestone } from '../_locations/addlestone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const scarlett: IBear = {
  Id: 'scarlett',
  Name: 'Scarlett',
  Description: `Introducing Scarlett, the adorable koala teddy bear with a special affection for Hello Kitty! With her cuddly fur, gentle demeanor, and a love for all things Hello Kitty, Scarlett is a delightful companion for fans of both koalas and the iconic character.
  Scarlett's adoration for Hello Kitty is evident in every aspect of her appearance. From her bow adorned with Hello Kitty's signature ribbon to her outfit featuring Hello Kitty's cute face, Scarlett embodies the spirit of friendship, cuteness, and positivity that Hello Kitty represents.
  Whenever Scarlett spots a Hello Kitty item, her eyes light up with joy. She collects Hello Kitty merchandise, from plush toys to stationery, and proudly displays her beloved Hello Kitty treasures. Scarlett's passion for Hello Kitty is infectious, and she's always eager to share stories, fun facts, and the latest Hello Kitty news with anyone who'll listen.
  But Scarlett's love for Hello Kitty goes beyond material possessions. She embraces the values that Hello Kitty embodies, such as kindness, friendship, and spreading happiness. Scarlett believes that Hello Kitty reminds us to celebrate our uniqueness, embrace our passions, and connect with others in meaningful ways.
  As a friend, Scarlett is gentle, compassionate, and a great listener. She understands the power of shared interests and will happily engage in conversations about Hello Kitty, offering warm hugs and creating a safe space where you can express your love for the adorable character.
  With Scarlett by your side, you'll experience the joy of immersing yourself in the world of Hello Kitty. Whether it's watching Hello Kitty cartoons, doodling in Hello Kitty-themed notebooks, or simply enjoying the comfort of Scarlett's presence, you'll find yourself surrounded by an aura of cuteness, positivity, and friendship.
  So, if you're looking for a furry companion who shares your love for Hello Kitty and brings a touch of koala charm to your world, Scarlett the Hello Kitty-loving koala teddy bear is the perfect choice. Get ready to embark on delightful adventures and embrace the magic of friendship with this adorable and friendly companion!`,
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2021, 10, 6),
  },
  Event: null,
  Rehomed: null,
};
