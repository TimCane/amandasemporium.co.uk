import { addlestone } from '../_locations/addlestone.location';
import { horley } from '../_locations/horley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lucas: IBear = {
  Id: 'lucas',
  Name: 'Lucas',
  Description: `Introducing Lucas, the teddy bear who has an unbridled passion for Star Wars and a heart filled with galactic adventure! With his Star Wars-themed attire, wide-eyed wonder, and a love for all things Jedi and Sith, Lucas is the perfect companion for those who immerse themselves in the epic saga of a galaxy far, far away.
  Lucas's Star Wars-inspired attire reflects his deep connection to the franchise. Whether he's donning a Jedi robe, a Stormtrooper helmet, or proudly displaying the emblem of the Rebel Alliance, his outfit showcases his dedication to the Star Wars universe. Lucas's wide-eyed wonder and infectious enthusiasm make him an exciting friend to have by your side as you explore the galaxy together.
  As a friend, Lucas is knowledgeable, imaginative, and always ready to embark on intergalactic adventures. He understands the allure of the Star Wars universe and the profound impact it has on fans. Lucas's presence sparks imaginative play, spirited discussions about lightsabers and starships, and a sense of camaraderie for all fellow Star Wars enthusiasts.
  Lucas's Star Wars adventures are filled with the thrill of epic space battles, the intrigue of the Force, and the triumph of the heroes. Whether he's engaging in lightsaber duels with imaginary foes, reenacting iconic scenes from the movies, or simply immersing himself in the rich lore of the Star Wars galaxy, he brings the magic of the franchise to life. Lucas's passion for Star Wars inspires others to embrace their own love for the saga and to appreciate its timeless themes of heroism and hope.
  While Lucas may be a teddy bear, he carries the spirit of a true Star Wars fan and the values of courage, loyalty, and the power of belief. He understands the importance of standing up for what is right and the eternal struggle between the light and dark sides of the Force. Lucas's presence fosters a sense of unity among fellow fans and reminds us of the enduring legacy of the Star Wars universe.
  With Lucas by your side, every day becomes an opportunity to explore the vastness of the Star Wars galaxy. Whether you're engaging in imaginative play, indulging in movie marathons, or simply relishing in the memories of your favorite Star Wars moments, Lucas's passion for the franchise will ignite your own sense of wonder and deepen your connection to a galaxy filled with adventure.
  So, if you're seeking a furry friend who embodies the spirit of the biggest Star Wars fan and the excitement of intergalactic exploration, Lucas the Star Wars-loving teddy bear is the perfect choice. Get ready to embark on epic space-faring quests, immerse yourself in the mythos of the Jedi and Sith, and experience the joy and camaraderie that Lucas brings as you traverse the Star Wars universe together. May the Force be with you!`,
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 5, 14),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};
