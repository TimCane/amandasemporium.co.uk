import { E20210925 } from '../_events/E2021-09-25.event';
import { cobham } from '../_locations/cobham.location';
import { kingston } from '../_locations/kingston.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const leonardo: IBear = {
  Id: 'leonardo',
  Name: 'Leonardo',
  Description: `
  Introducing Leonardo, the fearless teddy bear who channels the spirit of the Teenage Mutant Ninja Turtles! With his blue mask and a heart filled with bravery, Leonardo is the perfect companion for those who love the action-packed adventures and camaraderie of the turtles.
  Leonardo's appearance pays homage to his role as the leader of the Teenage Mutant Ninja Turtles. His blue mask signifies his disciplined nature and unwavering commitment to justice. With his confident stance and determined expression, Leonardo exudes a sense of authority and inspires those around him to embrace their own inner heroes.
  As a friend, Leonardo is courageous, disciplined, and always ready to stand up for what is right. He embodies the values of loyalty, teamwork, and the importance of family. Leonardo's presence brings a sense of unity and adventure, reminding you that you have a fearless companion who will join you in defending the innocent.
  Leonardo's turtle adventures are filled with thrilling battles, strategic maneuvers, and the triumph of good over evil. Whether he's honing his ninja skills, thwarting the plans of the Foot Clan, or simply engaging in imaginative turtle-themed activities, he brings a sense of excitement and heroism to every moment. Leonardo's leadership inspires others to embrace their own strengths and to stand up against injustice.
  While Leonardo may be a teddy bear, he carries the spirit of a hero and the values of integrity, discipline, and compassion. He understands the importance of protecting the weak, valuing friendship, and fighting for a better world. Leonardo's presence fosters a sense of responsibility and a commitment to making a positive difference.
  With Leonardo by your side, every day becomes an opportunity to embrace your inner hero and make the world a better place. Whether you're engaging in imaginative play, learning about the importance of teamwork, or simply cherishing the bonds of friendship, Leonardo's turtle spirit will ignite your own sense of courage and deepen your connection to the world of heroes.
  So, if you're seeking a furry friend who embodies the spirit of the Teenage Mutant Ninja Turtles and the excitement of adventure, Leonardo the turtle-loving teddy bear is the perfect choice. Get ready to embark on epic turtle adventures, embrace the values of justice and unity, and experience the thrill of heroism as you defend the innocent alongside Leonardo and your fellow turtle enthusiasts.`,
  UploadedOn: new Date(2021, 7, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20210925,
  Rehomed: {
    Location: kingston,
    Date: new Date(2021, 8, 25),
  },
};
