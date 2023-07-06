import { addlestone } from '../_locations/addlestone.location';
import { leatherhead } from '../_locations/leatherhead.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const baaabara: IBear = {
  Id: 'baaabara',
  Name: 'Baaabara',
  Description: `Meet Baaabara, the delightful teddy bear who is as fluffy and adorable as a sheep! With her soft woolly coat, gentle eyes, and a heart full of warmth, Baaabara is the perfect companion for those who appreciate the charm and innocence of farm animals.
  Baaabara's sheep-like appearance is what makes her truly special. Her fluffy wool symbolizes coziness and comfort, inviting you to cuddle up and enjoy her gentle presence. Baaabara's sweet smile and kind eyes exude a sense of innocence and tranquility, making her an endearing friend to have by your side.
  As a friend, Baaabara is gentle, patient, and always ready to listen. She understands the importance of offering a supportive ear and a comforting presence. Baaabara's calming nature helps create a safe space where you can share your thoughts, dreams, and worries, knowing that you're heard and understood.
  Baaabara's adventures are filled with the beauty of nature and the simplicity of farm life. Whether she's exploring meadows, frolicking with fellow farm animals, or simply enjoying the serene ambiance of a peaceful barn, Baaabara brings a touch of countryside charm and a sense of tranquility to every moment.
  While Baaabara may be a teddy bear, she carries the spirit of a gentle and peaceful sheep. She embodies their qualities of innocence, gentleness, and contentment. Baaabara's presence reminds us to appreciate the beauty of simplicity, find joy in the little things, and embrace the tranquility of nature.
  With Baaabara by your side, every day becomes a peaceful retreat. Whether you're imagining strolling through green pastures, listening to the soft bleats of sheep, or simply finding solace in a quiet moment together, Baaabara's sheep-like charm will warm your heart and bring a smile to your face.
  So, if you're seeking a furry friend who embodies the spirit of a gentle sheep and the serenity of farm life, Baaabara the sheep teddy bear is the perfect choice. Get ready to embark on cozy adventures, experience the beauty of simplicity, and enjoy the soothing presence and friendship that Baaabara brings into your world.`,
  UploadedOn: new Date(2021, 9, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2019, 10, 14),
  },
  Event: null,
  Rehomed: {
    Location: leatherhead,
    Date: new Date(2022, 3, 23),
  },
};
