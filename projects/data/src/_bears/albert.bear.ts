import { E20220924 } from '../_events/E2022-09-24.event';
import { crowborough } from '../_locations/crowborough.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const albert: IBear = {
  Id: 'albert',
  Name: 'Albert',
  Description: `Introducing Albert, the lovable teddy bear with a cozy twist! With his blue stripy pajamas and a little teddy bear of his own, Albert is the perfect companion for cuddling up and enjoying the comforts of bedtime.
  Albert's little teddy bear is his most treasured companion. They're inseparable, sharing secrets, dreams, and cuddles throughout the day and night. Albert understands the importance of having a friend by your side, and his little teddy bear provides comfort and a sense of security, making every journey and bedtime a little brighter.
  Albert's adventures are filled with cozy moments and simple joys. From imaginary tea parties to teddy bear picnics, he knows how to create magical memories. Albert's imaginative spirit inspires creativity and invites you to embrace the wonder and innocence of childhood, no matter your age.
  `,
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
