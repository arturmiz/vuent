module.exports = {
  title: 'Vuent',

  evergreen: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    repo: 'arturmiz/vuent',

    sidebarDepth: 4,

    sidebar: [
      ['/', 'Introduction'],
      '/get-started',
      {
        title: 'Components',
        children: [
          '/components/button',
          '/components/checkbox',
          '/components/header',
          '/components/input',
          '/components/link',
          '/components/radio',
          '/components/select',
          '/components/slider',
          '/components/toggle',
        ]
      }
    ],

    docsDir: 'docs',

    editLinks: true,

  }
};
