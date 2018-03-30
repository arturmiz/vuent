module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always',
      [
        'button',
        'checkbox',
        'input',
        'link',
        'radio',
        'toggle',
      ]
    ]
  }
};
