import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Takabrycheri',
  tagline: 'Where all my projects come together, clearly explained.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.takabrycheri.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'takabrycheri',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'main',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/takabrycheri/docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'rsi',
        path: 'docs-rsi-audio-kit',
        routeBasePath: 'rsi-audio-kit',
        sidebarPath: './sidebars.rsi.ts',
        editUrl: 'https://github.com/takabrycheri/docs/edit/main/docs-rsi-audio-kit/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Takabrycheri',
      logo: {
        alt: 'Takabrycheri logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/takabrycheri',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Risorse',
            items: [
              {label: 'Docs', to: '/docs/intro'},
              {label: 'RSI Audio Kit', to: '/rsi-audio-kit/getting-started'},
              {label: 'GitHub', href: 'https://github.com/takabrycheri/docs'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bryan Mainardi (Takabrycheri)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'L4TAFLN17R',
      apiKey: '1e659818c0077c6647107525a8d4e38c',
      indexName: 'Takabrycheri Docs',
      contextualSearch: true,
      searchParameters: {},
      insights: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
