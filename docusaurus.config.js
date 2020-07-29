const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: 'Ling',
  tagline: 'Notes for everything',
  url: 'https://lingt.xyz/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'lingt-xyz', // Usually your GitHub org/user name.
  projectName: 'lingt-xyz.github.io', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Ling',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/course/INSE6130',
          activeBasePath: 'docs/course',
          label: 'Course',
          position: 'left',
        },
        {
          to: 'docs/TA/COMP352',
          activeBasePath: 'docs/ta',
          label: 'TA',
          position: 'left',
        },
        {
          to: 'docs/research/Dictionary',
          activeBasePath: 'docs/research',
          label: 'Research',
          position: 'left',
        },
        {
          to: 'docs/language/Go',
          activeBasePath: 'docs/language',
          label: 'Language',
          position: 'left',
        },
        {
          to: 'docs/database/Cassandra',
          activeBasePath: 'docs/database',
          label: 'Database',
          position: 'left',
        },
        {
          to: 'docs/linux/Bash',
          activeBasePath: 'docs/linux',
          label: 'Linux',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/lingt-xyz/lingt-xyz.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Ling. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: 'da354ad68850303e93738bfa8160ae32',
      indexName: 'lingt',
      //searchParameters: {}, // Optional (if provided by Algolia)
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/lingt-xyz/io/tree/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lingt-xyz/io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      },
    ],
  ],
};
