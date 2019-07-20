import { storiesOf } from '@storybook/vue';

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
