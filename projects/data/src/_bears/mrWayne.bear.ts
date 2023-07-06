import { haylingIsland } from '../_locations/haylingIsland.location';
import { horley } from '../_locations/horley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mrWayne: IBear = {
  Id: 'mr-wayne',
  Name: 'Mr Wayne',
  Description: `Introducing Mr. Wayne, the teddy bear with an unwavering love for Batman! With his enthusiastic spirit, Batman-themed attire, and a heart filled with admiration for the Dark Knight, Mr. Wayne is the perfect companion for those who share his passion for the iconic superhero.
  Mr. Wayne's appearance showcases his dedication to Batman. Whether he's wearing a Batman-themed shirt, a cape, or proudly displaying the bat symbol, his attire reflects his love for the Caped Crusader. Mr. Wayne's wide-eyed enthusiasm and cheerful demeanor make him an exciting friend to have by your side as you immerse yourselves in the world of Gotham City.
  As a friend, Mr. Wayne is enthusiastic, knowledgeable, and always ready to delve into Batman's thrilling adventures. He understands the allure of the Batman universe and the impact it has on fans. Mr. Wayne's presence sparks discussions, imaginative play, and a shared appreciation for the heroism and values that Batman represents.
  Mr. Wayne's Batman adventures are filled with excitement, heroics, and the triumph of good over evil. Whether he's engaging in imaginative battles against Gotham's most notorious villains, solving mysteries, or simply immersing himself in the rich lore of Batman's world, he brings the magic of the Dark Knight to life. Mr. Wayne's passion for Batman inspires others to embrace their own love for the character and to celebrate the enduring legacy of the superhero.
  While Mr. Wayne may be a teddy bear, he carries the spirit of a dedicated Batman fan and the values of justice, heroism, and the power of self-belief. He understands the importance of standing up for what is right and the influence that superheroes can have in inspiring positive change. Mr. Wayne's presence fosters a sense of camaraderie among fellow fans and reminds us of the enduring impact of our favorite heroes.
  With Mr. Wayne by your side, every day becomes an opportunity to explore the vastness of Batman's world. Whether you're engaging in imaginative play, discussing Batman's greatest adventures, or simply cherishing the bonds of friendship, Mr. Wayne's Batman-loving spirit will ignite your own passion for the character and deepen your connection to the world of superheroes.
  So, if you're seeking a furry friend who embodies the spirit of a devoted Batman fan and the excitement of the Batman universe, Mr. Wayne the Batman-loving teddy bear is the perfect choice. Get ready to embark on thrilling Batman-inspired adventures, celebrate the heroics of the Dark Knight, and experience the joy and camaraderie that Mr. Wayne brings as you navigate the world of Gotham City together.`,
  UploadedOn: new Date(2021, 9, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2021, 7, 29),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 3, 23),
  },
};
