import { storiesOf } from '@storybook/vue';

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
