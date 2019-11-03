import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0,
          no-unused-vars: 0 */
storiesOf('Icon', module)
  .add('close', () => ({
    render: (h) => (
      <vnt-icon name="close" />
    )
  }))
  .add('contact', () => ({
    render: (h) => (
      <vnt-icon name="contact" />
    )
  }))
  .add('delete', () => ({
    render: (h) => (
      <vnt-icon name="delete" />
    )
  }))
  .add('edit', () => ({
    render: (h) => (
      <vnt-icon name="edit" />
    )
  }))
  .add('flag', () => ({
    render: (h) => (
      <vnt-icon name="flag" />
    )
  }))
  .add('global-navigation', () => ({
    render: (h) => (
      <vnt-icon name="global-navigation" />
    )
  }))
  .add('home', () => ({
    render: (h) => (
      <vnt-icon name="home" />
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
  }))
  .add('tag', () => ({
    render: (h) => (
      <vnt-icon name="tag" />
    )
  }));
