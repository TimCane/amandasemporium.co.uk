import { E20190928 } from '../_events/E2019-09-28.event';
import { birdham } from '../_locations/birdham.location';
import { chessington } from '../_locations/chessington.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bobby: IBear = {
  Id: 'bobby',
  Name: 'Bobby',
  Description: `Introducing Bobby, the lovable teddy bear with a passion for baseball and an unwavering support for the Chicago Cubs! With his baseball cap, team jersey, and a heart full of team spirit, Bobby is the perfect companion for those who cherish the excitement of the game and the camaraderie of being a sports fan.
  Bobby's love for baseball is evident in every aspect of his appearance. His baseball cap proudly displays the emblem of the Chicago Cubs, showcasing his unwavering support for the team. Bobby's team jersey further emphasizes his dedication and loyalty, making him a true embodiment of Cubs fandom.
  As a friend, Bobby is enthusiastic, fun-loving, and always ready to talk baseball. He understands the joy of cheering for your favorite team, analyzing game stats, and discussing memorable moments. Bobby's passion for the game is infectious, making him the perfect companion for engaging in spirited sports conversations.
  Bobby's adventures revolve around the excitement and thrill of baseball. Whether he's imagining himself on the field, hitting home runs, or participating in imaginary games with fellow teddy bear teammates, he brings the energy and enthusiasm of the sport to every play. Bobby's love for the game inspires others to embrace their own passions and enjoy the camaraderie of being part of a sports community.
  While Bobby supports the Chicago Cubs, he also values the sportsmanship and camaraderie that sports bring. He understands the importance of unity, teamwork, and the shared experiences that bond fans together. Bobby's presence fosters a sense of community, reminding everyone that supporting a team is about more than just the wins and losses—it's about celebrating the love of the game.
  With Bobby by your side, every day becomes a celebration of baseball. Whether you're catching a game on TV, playing catch in the backyard, or simply relishing in the memories of past baseball seasons, Bobby's team spirit and love for the game will ignite your enthusiasm and deepen your connection to the world of baseball.
  So, if you're seeking a furry friend who embodies the spirit of baseball and the unwavering support for the Chicago Cubs, Bobby the baseball-loving teddy bear is the perfect choice. Get ready to embark on exciting sports adventures, celebrate the joys of being a fan, and experience the thrill of the game alongside Bobby as you root for the Chicago Cubs!`,
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: birdham,
    Date: new Date(2019, 7, 24),
  },
  Event: E20190928,
  Rehomed: {
    Location: chessington,
    Date: new Date(2019, 8, 28),
  },
};
