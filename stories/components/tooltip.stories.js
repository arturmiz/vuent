import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0 */
storiesOf('Tooltip', module)
  .add('default', () => ({
    template: `
    <vnt-button style="margin: 50px">
      Hover me
      <vnt-tooltip>Tooltip text</vnt-tooltip>
    </vnt-button>
    `
  }));
