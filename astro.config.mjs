// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sectionize from '@hbsnow/rehype-sectionize';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeFigure from '@microflash/rehype-figure'
import rehypeUnwrapImages from 'rehype-unwrap-images'

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkGfm,
        remarkMath,
      ],
      rehypePlugins: [
        sectionize,
        rehypeKatex,
        rehypeUnwrapImages,
        rehypeFigure
      ],
    }),
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'dark-plus',
      }
    }
  },
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
});
