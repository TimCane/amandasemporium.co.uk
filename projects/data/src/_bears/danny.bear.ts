import { E20190921 } from '../_events/E2019-09-21.event';
import { chippenham } from '../_locations/chippenham.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const danny: IBear = {
  Id: 'danny',
  Name: 'Danny',
  Description: `Introducing Danny, the adventurous teddy bear with a love for dinosaurs and a special place in his heart for the magnificent Triceratops! With his curious eyes, dinosaur-themed attire, and a heart filled with prehistoric wonder, Danny is the perfect companion for those who are fascinated by the ancient world and the mighty creatures that once roamed the Earth.
  Danny's passion for dinosaurs is evident in every aspect of his appearance. From his dino-inspired shirt to his playful dinosaur-printed accessories, he proudly displays his love for these ancient giants. Danny's sparkling eyes reflect his sense of wonder and excitement, making him an enchanting friend for any aspiring paleontologist or dinosaur enthusiast.
  As a friend, Danny is inquisitive, playful, and always ready for prehistoric adventures. He understands the importance of curiosity and the joy of discovery. Danny's presence sparks imagination and encourages others to embrace their own sense of wonder about the natural world.
  Danny's dinosaur adventures are filled with thrilling expeditions and exciting discoveries. Whether he's imagining roaming the wild landscapes of the past, uncovering fossil treasures, or learning about different dinosaur species, he brings the ancient world to life. Danny's fascination with dinosaurs ignites a sense of awe and instills a love for learning and exploring.
  While Danny may not be a real dinosaur, he carries the spirit of these majestic creatures and the desire to protect our natural heritage. He understands the importance of conservation and cherishing the wonders of the natural world. Danny's presence fosters a sense of responsibility and a commitment to preserving the legacy of these incredible creatures.
  With Danny by your side, every day becomes an opportunity for exciting dinosaur adventures. Whether you're engaging in imaginative play, studying dinosaur facts, or simply appreciating the beauty of the natural world, Danny's love for dinosaurs will ignite your own sense of curiosity and deepen your connection to the prehistoric era.
  So, if you're seeking a furry friend who embodies the spirit of dinosaur fascination and the joy of discovery, Danny the dinosaur-loving teddy bear is the perfect choice. Get ready to embark on epic prehistoric journeys, embrace the wonders of the dinosaur world, and experience the joy and excitement that Danny brings as you uncover the mysteries of the past together.`,
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2019, 7, 24),
  },
  Event: E20190921,
  Rehomed: {
    Location: chippenham,
    Date: new Date(2019, 8, 21),
  },
};
