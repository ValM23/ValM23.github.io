import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Roxy Valdez',
  tagline: 'Offensive Security Researcher',
  favicon: 'img/favicon.ico',

  url: 'https://valm23.github.io',
  baseUrl: '/',

  organizationName: 'ValM23',
  projectName: 'ValM23.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: 'writeups',
          blogTitle: 'Writeups',
          blogDescription:
            'Technical writeups on infrastructure and security engineering work.',
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'roxy@security',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/writeups', label: 'Writeups', position: 'left'},
        {
          href: 'https://github.com/valm23',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/matttvaldez',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {label: 'Email', href: 'mailto:matt.valdez@pm.me'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/matttvaldez'},
            {label: 'GitHub', href: 'https://github.com/valm23'},
          ],
        },
        {
          title: 'Writeups',
          items: [{label: 'All writeups', to: '/writeups'}],
        },
      ],
      copyright: 'Matthew Valdez (Roxy) — built with caffeine and spite',
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
