module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always',
      [
        'button',
        'checkbox',
        'header',
        'input',
        'link',
        'radio',
        'select',
        'slider',
        'toggle',
      ]
    ]
  }
};
