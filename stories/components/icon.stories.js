import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0,
          no-unused-vars: 0 */
storiesOf('Icon', module)
  .add('contact', () => ({
    render: (h) => (
      <vnt-icon name="contact" />
    )
  }))
  .add('edit', () => ({
    render: (h) => (
      <vnt-icon name="edit" />
    )
  }))
  .add('global-navigation', () => ({
    render: (h) => (
      <vnt-icon name="global-navigation" />
    )
  }))
  .add('save', () => ({
    render: (h) => (
      <vnt-icon name="save" />
    )
  }))
  .add('settings', () => ({
    render: (h) => (
      <vnt-icon name="settings" />
    )
  }));
