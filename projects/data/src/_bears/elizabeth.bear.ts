import { E20190413 } from '../_events/E2019-04-13.event';
import { ashford } from '../_locations/ashford.location';
import { chertseySouth } from '../_locations/chertseySouth.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const elizabeth: IBear = {
  Id: 'elizabeth',
  Name: 'Elizabeth',
  Description: `
  Meet Elizabeth, the adorable teddy bear with a heart as warm as a cozy fireplace. Dressed in a charming tartan skirt, she's always ready to bring joy and comfort to anyone lucky enough to hold her.
  Elizabeth's soft, fluffy fur invites you into a world of gentle hugs and endless cuddles. With her kind, button-like eyes, she looks at you with a gaze that instantly melts your worries away.
  Whether you're feeling happy or in need of a little extra cheer, Elizabeth is your loyal companion, ready to listen to your secrets and share in your laughter. With every squeeze, you'll feel the love and companionship she brings, making her the perfect friend for snuggles and sweet dreams.`,
  UploadedOn: new Date(2019, 3, 7),
  Type: {
    Type: BearTypeEnum.ILoveFancyDressBear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 0, 8),
  },
  Event: E20190413,
  Rehomed: {
    Location: chertseySouth,
    Date: new Date(2019, 3, 13),
  },
};
