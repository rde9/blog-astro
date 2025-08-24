// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sectionize from '@hbsnow/rehype-sectionize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      sectionize,
      rehypeKatex,
    ],
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'dark-plus',
      }
    }
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: 'Figtree',
      cssVariable: '--font-figtree',
      weights: [400, 600],
      fallbacks: [],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400],
      subsets: ['latin'],
      fallbacks: [],
    },
  ]
  }
});
