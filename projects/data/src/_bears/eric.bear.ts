import { addlestone } from '../_locations/addlestone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const eric: IBear = {
  Id: 'eric',
  Name: 'Eric',
  Description: `Meet Eric, the grumpy old man teddy bear with a heart of gold! With his furrowed brow, slightly disheveled appearance, and a touch of grumpiness, Eric brings a unique charm and a surprising depth of character to the world of teddy bears.
  Despite his grumpy nature, Eric is a loyal and reliable companion. He's the type of friend who offers honest advice, even if it comes with a gruff delivery. Eric's straightforwardness and no-nonsense attitude make him a trusted confidante who will always tell it like it is.
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
