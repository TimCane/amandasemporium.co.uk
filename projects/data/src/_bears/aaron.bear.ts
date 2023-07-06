import { E20190525 } from '../_events/E2019-05-25.event';
import { etonWick } from '../_locations/etonWick.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const aaron: IBear = {
  Id: 'aaron',
  Name: 'Aaron',
  Description: `Meet Aaron, the spirited and fearless Arsenal teddy bear! With his cuddly fur, endearing smile, and his signature Arsenal uniform, Aaron is the ultimate supporter and companion for all Arsenal fans, young and old.
  Despite his small size, Aaron embodies the spirit of the mighty Arsenal team. He carries the club's colors with pride, sporting the iconic red and white kit that symbolizes strength, determination, and a never-give-up attitude. Whether it's cheering on the team from the stands or joining in your own mini matches at home, Aaron is always ready to be part of the action.
  Aaron's love for football is contagious. He knows all the players by heart and can recount memorable goals and epic matches with incredible accuracy. He's not just a passive observer, though – Aaron is always up for a friendly game of kickabout, showcasing his skills with every pass and dribble. You'll be amazed at his ability to score goals with his fluffy paws!
  But beyond his passion for football, Aaron is a true friend. He's always there to lend a listening ear, offer comforting hugs, and share in the joys and disappointments of being an Arsenal fan. He embodies the camaraderie and unity that football brings, reminding us that we're part of a larger community that supports and celebrates together.
  With Aaron by your side, you'll experience the thrill of every match as if you were right there on the pitch. He'll inspire you to dream big, persevere through challenges, and celebrate victories both big and small. Aaron is the perfect embodiment of loyalty, team spirit, and the indomitable Arsenal mindset.
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
