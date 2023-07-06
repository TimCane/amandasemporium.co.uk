import { addlestone } from '../_locations/addlestone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const eric: IBear = {
  Id: 'eric',
  Name: 'Eric',
  Description: `Meet Eric, the grumpy old man teddy bear with a heart of gold! With his furrowed brow, slightly disheveled appearance, and a touch of grumpiness, Eric brings a unique charm and a surprising depth of character to the world of teddy bears.
  Eric's grumpy demeanor is merely a facade, masking a heart filled with kindness and wisdom. Behind his grumpy exterior lies a teddy bear with a wealth of life experiences, stories, and a keen sense of humor. He may grumble and groan, but his grumpiness is part of his endearing charm.
  Despite his grumpy nature, Eric is a loyal and reliable companion. He's the type of friend who offers honest advice, even if it comes with a gruff delivery. Eric's straightforwardness and no-nonsense attitude make him a trusted confidante who will always tell it like it is.
  Beneath his grumpy façade, Eric possesses a soft spot for nostalgia. He reminisces about the good old days and shares tales of past adventures with a twinkle in his eye. Whether it's recounting childhood memories or reflecting on bygone eras, Eric brings a touch of wisdom and a sense of timelessness to every conversation.
  Despite his grumpy disposition, Eric genuinely cares for those around him. When a friend is in need, he sets aside his grumpiness and steps up, offering a comforting embrace and a listening ear. Eric's surprising tenderness reminds us that even those with a gruff exterior can have a heart overflowing with compassion.
  With Eric by your side, every day becomes an adventure. Whether you're engaging in friendly banter, seeking advice from a seasoned teddy bear, or simply appreciating the authenticity of a grumpy old man with a heart of gold, Eric's unique charm will bring a smile to your face and warm your heart.
  So, if you're looking for a teddy bear companion who embodies the spirit of a grumpy old man with a hidden soft side, Eric is the perfect choice. Get ready to embark on whimsical adventures, share heartfelt conversations, and experience the unexpected warmth and wisdom that Eric brings to your world.`,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.BearFactory,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Event: null,
  Rehomed: null,
};
