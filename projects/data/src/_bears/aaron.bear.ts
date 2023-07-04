import { E20190525 } from '../_events/E2019-05-25.event';
import { etonWick } from '../_locations/etonWick.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const aaron: IBear = {
  Id: 'aaron',
  Name: 'Aaron',
  Description: `Meet Aaron, the spirited and fearless Arsenal teddy bear! With his cuddly fur, endearing smile, and his signature Arsenal uniform, Aaron is the ultimate supporter and companion for all Arsenal fans, young and old.
  Aaron's love for football is contagious. He knows all the players by heart and can recount memorable goals and epic matches with incredible accuracy. He's not just a passive observer, though – Aaron is always up for a friendly game of kickabout, showcasing his skills with every pass and dribble. You'll be amazed at his ability to score goals with his fluffy paws!
  So, whether you're watching a match, recreating iconic Arsenal moments, or simply seeking a loyal companion, Aaron the Arsenal teddy bear is the perfect teammate. Get ready to embark on unforgettable football adventures and embrace the true spirit of the Arsenal family with this adorable and friendly companion!`,
  UploadedOn: new Date(2018, 10, 12),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 9, 13),
  },
  Event: E20190525,
  Rehomed: {
    Location: etonWick,
    Date: new Date(2019, 4, 25),
  },
};
