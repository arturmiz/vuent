import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0 */
storiesOf('Tooltip', module)
  .add('button', () => ({
    template: `
    <vnt-button style="margin: 80px">
      Hover me
      <vnt-tooltip>Tooltip text</vnt-tooltip>
    </vnt-button>
    `
  }))
  .add('text', () => ({
    template: `
    <p style="margin: 80px; width: 300px; padding: 4px;">
      Lorem ipsum dolor sit amet
      <vnt-tooltip>Tooltip text</vnt-tooltip>
    </p>
    `
  }))
  .add('image', () => ({
    template: `
    <figure style="width: 200px; height: 150px; margin: 50px">
      <img src="https://dummyimage.com/200x150/000/fff.jpg&text=Test+image" width="200" height="150" />
      <vnt-tooltip>Tooltip text</vnt-tooltip>
    </picture>
    `
  }));
