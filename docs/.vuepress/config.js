module.exports = {
  title: 'Vuent',
  description: 'Vue.js components implementing Microsoft Fluent Design',
  dest: 'docs/dist',

  evergreen: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  ga: 'UA-104676924-2',

  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    repo: 'arturmiz/vuent',

    sidebarDepth: 4,

    sidebar: [
      ['/', 'Introduction'],
      '/get-started',
      {
        title: 'Components',
        collapsible: false,
        children: [
          '/components/autosuggest',
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

  }
};
