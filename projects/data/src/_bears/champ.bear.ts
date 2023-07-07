import { E20210731 } from '../_events/E2021-07-31.event';
import { binfield } from '../_locations/binfield.location';
import { bracknell } from '../_locations/bracknell.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const champ: IBear = {
  Id: 'champ',
  Name: 'Champ',
  Description: `
  Introducing Champ, the adventurous teddy bear who dives into the depths of the ocean as an enthusiastic scuba diver! With his goggles, snorkel, and a heart filled with a passion for underwater exploration, Champ is the perfect companion for those who are captivated by the mysteries and beauty of the underwater world.
  Champ's scuba diving gear is a testament to his love for the ocean and his eagerness to explore its hidden treasures. His goggles allow him to see the vibrant marine life in all its splendor, while his snorkel lets him breathe effortlessly beneath the waves. Champ's appearance reflects his deep connection to the underwater realm.
  As a friend, Champ is adventurous, curious, and always ready to dive into new experiences. He understands the importance of protecting marine life and cherishing the fragile beauty of the ocean. Champ's presence evokes a sense of wonder and awe, inspiring those around him to appreciate and preserve the precious ecosystems that lie beneath the surface.
  Champ's scuba diving adventures are filled with a sense of discovery and fascination. Whether he's swimming alongside colorful fish, marveling at coral reefs, or exploring hidden underwater caves, he brings the magic of the ocean to life. Champ's deep appreciation for marine life reminds us of the vastness and interconnectedness of the natural world.
  While Champ may be a teddy bear, he also values the importance of conservation and environmental stewardship. He knows that our actions impact the health of the oceans and encourages others to embrace sustainable practices. Champ's presence fosters a sense of responsibility and a commitment to protecting the underwater habitats he loves.
  With Champ by your side, every day becomes an opportunity for underwater exploration. Whether you're embarking on imaginary scuba diving adventures, learning about marine conservation, or simply appreciating the beauty of the ocean from afar, Champ's passion for scuba diving will ignite your own sense of wonder and deepen your connection to the natural world.
  So, if you're seeking a furry friend who embodies the spirit of a scuba diver and the love for the ocean, Champ the scuba diving teddy bear is the perfect choice. Get ready to dive into exciting underwater expeditions, embrace the wonders of marine life, and experience the joy and awe that Champ brings as you explore the depths of your own imagination.`,
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: E20210731,
  Rehomed: {
    Location: bracknell,
    Date: new Date(2021, 6, 31),
  },
};
