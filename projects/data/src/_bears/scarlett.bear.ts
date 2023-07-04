import { addlestone } from '../_locations/addlestone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const scarlett: IBear = {
  Id: 'scarlett',
  Name: 'Scarlett',
  Description: `
  Introducing Scarlett, the adorable koala teddy bear with a special affection for Hello Kitty! With her cuddly fur, gentle demeanor, and a love for all things Hello Kitty, Scarlett is a delightful companion for fans of both koalas and the iconic character.
  Scarlett's adoration for Hello Kitty is evident in every aspect of her appearance. From her bow adorned with Hello Kitty's signature ribbon to her outfit featuring Hello Kitty's cute face, Scarlett embodies the spirit of friendship, cuteness, and positivity that Hello Kitty represents.
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
