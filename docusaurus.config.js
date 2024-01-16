import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ads Kit',
  tagline: 'Your All-in-One Advertising Solution! 🚀',
  favicon: 'img/icon.png', //enter image path [add an image in static/img folder and write its path here for example : img/icon.png]

  url: 'https://adskit.voxelbusters.com/', //enter main url of site 
  baseUrl: '/',

  organizationName: 'ORGANISATION NAME', 
  projectName: 'ads-kit-website', //enter github repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/voxelbusters/ads-kit-website/tree/main', //enter edit url eg:
        },
        blog: {
          showReadingTime: true,
          editUrl:
          'https://github.com/voxelbusters/ads-kit-website/tree/main', //enter edit url eg:
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: ['/'], 
        blogRouteBasePath: ['/blog'], 
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
       tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ads Kit',
        logo: {
          alt: 'Site logo',
          src: 'img/icon.png',  //enter image path [add an image in static/img folder and write its path here for example : img/SmallIcon.png]
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentations',
            items: [
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'Tutorials',
                to: 'https://adskit.voxelbusters.com/', //enter the main url eg:
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                href: 'https://discord.gg/mp7fsmmC9n', //enter the support link page
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Voxel Busters',
                to: 'https://www.voxelbusters.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/voxelbusters/ads-kit-website', //enter the github repo link
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Organisation Name`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'], 
      },
      
    }),
};

export default config;
