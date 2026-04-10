/**
 * Remark plugin that replaces {RESCUED_DATE_AGO} and {REHOMED_DATE_AGO} tokens
 * in markdown text nodes with conversational relative time strings.
 *
 * Frontmatter dates are passed via the plugin options at config time,
 * but since remark plugins run per-file and we need the frontmatter from
 * each file, we use the vfile.data.astro.frontmatter to access it.
 */
import { visit } from 'unist-util-visit';
import { replaceDateTokens } from './date-tokens.js';
import type { Root } from 'mdast';

export default function remarkDateTokens() {
  return (tree: Root, file: any) => {
    const frontmatter = file.data?.astro?.frontmatter;
    if (!frontmatter) return;

    visit(tree, 'text', (node: any) => {
      if (node.value && node.value.includes('{') && node.value.includes('DATE_AGO}')) {
        node.value = replaceDateTokens(node.value, frontmatter);
      }
    });
  };
}
