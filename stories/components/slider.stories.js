import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0 */
storiesOf('Slider', module)
  .add('default', () => ({
    data() {
      return {
        value: 5
      };
    },
    template: `
      <div style="width: 300px">
        <vnt-slider v-model="value">Density</vnt-slider>
        <p class="result">value: {{ value }}</p>
      </div>`
  }))
  .add('disabled', () => ({
    data() {
      return {
        value: 5
      };
    },
    template: `
      <div style="width: 300px">
        <vnt-slider v-model="value" disabled></vnt-slider>
        <p class="result">value: {{ value }}</p>
      </div>`
  }))
  .add('range', () => ({
    data() {
      return {
        value: 3
      };
    },
    template: `
      <div style="width: 300px">
        <vnt-slider v-model="value" min="-10" max="10"></vnt-slider>
        <p class="result">value: {{ value }}</p>
      </div>`
  }));
