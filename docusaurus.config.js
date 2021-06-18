/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Plataforma de adequação à LGPD',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    colorMode:{
      switchConfig: {
        darkIcon: ' ',
        lightIcon: ' ',
      }
    },
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'AdOpt',
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Ajuda',
              href: 'https://adopt-help.freshdesk.com/support/home',
            },
            {
              label: 'Política de privacidade',
              href: 'https://goadopt.io/politica-de-privacidade',
            },
            {
              label: 'Termos de uso',
              href: 'https://goadopt.io/termos-de-uso',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Tutorial',
              href: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Site',
              href: 'https://goadopt.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Go AdOpt`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    localeConfigs: {
      pt: {
        label: 'Português',
      },
      en: {
        label: 'English',
      },
    },
  },
};

