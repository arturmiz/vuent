import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0,
          no-unused-vars: 0 */
storiesOf('Header', module)
  .add('header', () => ({
    render: (h) => (
      <vnt-header>Header</vnt-header>
    )
  }))
  .add('subheader', () => ({
    render: (h) => (
      <vnt-header>
        <span slot="subheader">Subheader</span>
      </vnt-header>
    )
  }))
  .add('header & subheader', () => ({
    render: (h) => (
      <vnt-header>
        <span slot="header">Header</span>
        <span slot="subheader">Subheader</span>
      </vnt-header>
    )
  }));
