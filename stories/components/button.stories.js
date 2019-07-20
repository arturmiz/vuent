import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0,
          no-unused-vars: 0 */
storiesOf('Button', module)
  .add('default', () => ({
    render: (h) => (
      <vnt-button>Button</vnt-button>
    )
  }))
  .add('primary', () => ({
    render: (h) => (
      <vnt-button primary>Button</vnt-button>
    )
  }))
  .add('disabled', () => ({
    render: (h) => (
      <vnt-button disabled>Button</vnt-button>
    )
  }))
  .add('label', () => ({
    render: (h) => (
      <vnt-button label="Button"></vnt-button>
    )
  }));
