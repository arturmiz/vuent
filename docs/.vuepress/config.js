module.exports = {
  title: 'Vuent',

  evergreen: true,

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
          '/components/header',
          '/components/input',
          '/components/link'
        ]
      }
    ],

    docsDir: 'docs',

    editLinks: true,

  }
};
