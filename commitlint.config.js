module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always',
      [
        'autosuggest',
        'button',
        'calendarview',
        'checkbox',
        'dialog',
        'header',
        'icon',
        'input',
        'link',
        'listview',
        'navview',
        'pivot',
        'radio',
        'rating',
        'select',
        'slider',
        'toggle',
        'website'
      ]
    ]
  }
};
