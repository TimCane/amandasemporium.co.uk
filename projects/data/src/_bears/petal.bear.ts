import { seaford } from '../_locations/seaford.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const petal: IBear = {
  Id: 'petal',
  Name: 'Petal',
  Description: `Introducing Petal, the enchanting teddy bear who brings the beauty of flowers to life! With her soft and huggable petals, gentle smile, and a heart full of floral magic, Petal is a truly unique and delightful companion.
  Petal's connection to flowers is extraordinary. She embodies the essence of nature's wonders, with her fur adorned in vibrant colors and patterns reminiscent of blooming blossoms. Petal lives and breathes flowers, spreading their fragrance and radiance wherever she goes.
  Petal's home is a floral paradise. Her surroundings are adorned with lush gardens, where colorful flowers bloom in abundance. She knows each flower by name, from delicate roses to cheerful daisies, and delights in their beauty and diversity. Petal teaches us to appreciate the natural world and find joy in its mesmerizing creations.
  But Petal's connection to flowers goes beyond aesthetics. She embodies their qualities—grace, resilience, and the ability to bring happiness. Petal has a calming presence, soothing hearts and lifting spirits with her floral aura. She's a friend who understands the importance of nurturing oneself and finding solace in nature's embrace.
  Petal's adventures are filled with floral enchantment. She often ventures out to explore meadows, picking wildflowers and arranging them into beautiful bouquets. Petal has a talent for creating stunning floral displays that brighten up any room and bring smiles to the faces of those who behold them.
  As a friend, Petal is gentle, compassionate, and always there to listen. She understands the healing power of nature and provides a safe space to share your thoughts and emotions. Petal's presence is like a gentle breeze, soothing your worries and reminding you of the beauty that surrounds you.
  With Petal by your side, every day becomes a celebration of nature's bountiful gifts. Whether you're admiring a vibrant sunset, exploring a garden, or simply enjoying the serenity of a peaceful moment, Petal's floral magic will infuse your world with wonder and joy.
  So, if you're seeking a furry friend who embodies the spirit of nature's beauty, Petal the flower-loving teddy bear is the perfect choice. Get ready to immerse yourself in a world of blossoms and discover the profound connection between humans and flowers. Embrace the enchantment that Petal brings and let the beauty of flowers fill your heart with warmth and delight!`,
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: seaford,
    Date: new Date(2023, 5, 11),
  },
  Event: null,
  Rehomed: null,
};
