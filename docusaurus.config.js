const path = require('path')


module.exports = {
  title: 'Tax Computation Home',
  tagline: 'The Home of Tax Computation',
  url: 'https://developer.redis.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redis-developer', // Usually your GitHub org/user name.
  projectName: 'redis-developer', // Usually your repo name.
  customFields: {
    authors: {
      simon: {
        name: 'Simon Prickett',
        link: 'https://twitter.com/simon_prickett',
        title: 'Manager, Developer Advocacy',
        image: 'profile_pic_simon_prickett.jpg'
      },
      julian: {
        name: 'Julian Mateu',
        link: 'https://www.linkedin.com/in/julian-mateu',
        title: 'Sr. Backend Software Engineer at Globality, Inc. ',
        image: 'profile_pic_julian_mateu.jpg'
   }
  }
 },
  themeConfig: {

    // ...
    googleTagManager: {
      trackingID: 'GTM-W8Z6BLQ',
    },
    prism : {
      additionalLanguages: ['csharp', 'php', 'ruby']

    },

    navbar: {
      style: 'dark',
      title: null,
      // logo: {
      //   alt: 'Redis Developer Hub logo',
      //   src: 'img/logo-1.png',
      // },
      hideOnScroll: false,
      items: [
        // {
        //   to: '/create/rediscloud',
        //   activeBasePath: 'docs',
        //   label: 'Get started',
        //   position: 'right',
        // },
        // {
        //   href: 'https://launchpad.redis.com',
        //   label: 'Redis Launchpad',
        //   position: 'right',
        // },
        {
          to: '/',
          label: 'Home',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redis Labs logo',
        src: 'img/redis_logo_red_white_rgb.svg',
        href: 'https://redis.com/', 
      },
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Create Database',
              to: '/create/rediscloud',
            },
            {
              label: 'Build with Redis Modules',
              href: '/howtos/redisearch/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: 'https://redis.com/community/',
            },
            {
              label: 'Redis University',
              href: 'https://university.redis.com',
            }
          ],
        },
      ],
   copyright: `Copyright: © ${new Date().getFullYear()} Intuit. All rights reserved.`,
   },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    //announcementBar: {
    //  id: 'redisconf20201cfp', // Any value that will identify this message.
    //  content: '<p class="text">We\'re taking part in Hacktoberfest!</p> <a href="/hacktoberfest" class="btn">Join Us!</a>',
    //  content: '<p class="text"></p> <a href="https://www.youtube.com/c/Redisinc/playlists?view=50&sort=dd&shelf_id=1" target="_blank" rel="noopener" class="btn"></a>',
    //  backgroundColor: '#fff', // Defaults to `#fff`.
    //  textColor: '#000', // Defaults to `#000`.
    //  isCloseable: true, // Defaults to `true`.
    //},
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
          'https://github.com/redis-developer/redis-developer/edit/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass', path.resolve(__dirname, 'plugins', 'gtm'),
    require.resolve("@cmfcmf/docusaurus-search-local"),
  ],
};
