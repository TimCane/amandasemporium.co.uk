import { E20220924 } from '../_events/E2022-09-24.event';
import { crowborough } from '../_locations/crowborough.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const albert: IBear = {
  Id: 'albert',
  Name: 'Albert',
  Description: `Introducing Albert, the lovable teddy bear with a cozy twist! With his blue stripy pajamas and a little teddy bear of his own, Albert is the perfect companion for cuddling up and enjoying the comforts of bedtime.
  Albert's blue stripy pajamas reflect his love for relaxation and tranquility. The soothing hues of blue evoke a sense of calmness, inviting you to unwind and snuggle up for a peaceful night's sleep. With his pajamas, Albert brings the comfort and coziness of bedtime to any adventure or quiet moment.
  Albert's little teddy bear is his most treasured companion. They're inseparable, sharing secrets, dreams, and cuddles throughout the day and night. Albert understands the importance of having a friend by your side, and his little teddy bear provides comfort and a sense of security, making every journey and bedtime a little brighter.
  As a friend, Albert is gentle, caring, and always there to lend an ear. He understands the value of companionship and the power of a comforting embrace. Whether you're feeling sleepy, need someone to share your dreams with, or simply want to snuggle up with a friend, Albert and his little teddy bear are ready to provide the warmth and love you seek.
  Albert's adventures are filled with cozy moments and simple joys. From imaginary tea parties to teddy bear picnics, he knows how to create magical memories. Albert's imaginative spirit inspires creativity and invites you to embrace the wonder and innocence of childhood, no matter your age.
  With Albert by your side, every day becomes a celebration of comfort, friendship, and joyful moments. Whether you're sharing bedtime stories, creating imaginary worlds, or simply enjoying a peaceful evening together, Albert's presence will make you feel safe, loved, and ready to embark on sweet dreams.
  So, if you're seeking a teddy bear companion who embodies the spirit of coziness and companionship, Albert with his blue stripy pajamas and his little teddy bear is the perfect choice. Get ready to snuggle up, share special moments, and experience the warmth and comfort that Albert brings into your world.`,
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: crowborough,
    Date: new Date(2022, 3, 26),
  },
  Event: E20220924,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 8, 24),
  },
};
