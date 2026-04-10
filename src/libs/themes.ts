export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  headingFont: string;
  bodyFont: string;
}

export const themes: ThemeConfig[] = [
  {
    id: 'boutique',
    name: 'Boutique & Crafted',
    description: 'Elegant, curated, warm',
    headingFont: 'Playfair Display',
    bodyFont: 'Lora',
  },
  {
    id: 'whimsical',
    name: 'Warm & Whimsical',
    description: 'Cozy, handmade, nostalgic',
    headingFont: 'Nunito',
    bodyFont: 'Quicksand',
  },
];

export const defaultTheme = themes[0];

export function getTheme(id: string): ThemeConfig {
  return themes.find(t => t.id === id) ?? defaultTheme;
}
