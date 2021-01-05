import Tooltip from './Tooltip.vue';

export default {
  title: 'Tooltip'
};

export const Button = () => ({
  components: { Tooltip },
  template: `
    <vnt-button style="margin: 80px">
      Hover me
      <vnt-tooltip>Tooltip text</vnt-tooltip>
    </vnt-button>
  `
});

export const Text = () => ({
  components: { Tooltip },
  template: `
    <p style="margin: 80px; width: 300px; padding: 4px;">
      Lorem ipsum dolor sit amet
      <vnt-tooltip>Tooltip text</vnt-tooltip>
    </p>
  `
});

export const Image = () => ({
  components: { Tooltip },
  template: `
    <figure style="width: 200px; height: 150px; margin: 50px">
      <img src="https://dummyimage.com/200x150/000/fff.jpg&text=Test+image" width="200" height="150" />
      <vnt-tooltip>Tooltip text</vnt-tooltip>
    </figure>
  `
});
