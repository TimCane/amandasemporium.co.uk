/**
 * Human-friendly display labels for enum/slug values.
 * Centralises all label maps so they're defined once.
 */

export const productCategoryLabels: Record<string, string> = {
  'bags-and-cases': 'Bags & Cases',
  'baby-and-children': 'Baby & Children',
  'knitted-and-crocheted': 'Knitted & Crocheted',
  'home-and-gifts': 'Home & Gifts',
  'soaps': 'Soaps',
  'rescued-bears': 'Rescued Bears',
};

export const galleryCategoryLabels: Record<string, string> = {
  'bears': 'Bears',
  'markets': 'Markets',
  'products': 'Products',
};

/**
 * Convert a slug like 'build-a-bear' to a display label like 'Build a Bear'.
 * Re-exported from bear-groups for convenience — this is the canonical location.
 */
export { slugToLabel } from './bear-groups';
