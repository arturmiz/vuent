module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always',
      [
        'autosuggest',
        'button',
        'checkbox',
        'dialog',
        'header',
        'input',
        'link',
        'navview',
        'radio',
        'rating',
        'select',
        'slider',
        'tabs',
        'toggle',
        'website'
      ]
    ]
  }
};
