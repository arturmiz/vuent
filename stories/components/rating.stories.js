import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0 */
storiesOf('Rating', module)
  .add('default', () => ({
    data() {
      return {
        value: 3.25
      };
    },
    template: `
      <div>
        <vnt-rating v-model="value" />
        <p class="result">value: {{ value }}</p>
      </div>`
  }))
  .add('disabled', () => ({
    data() {
      return {
        value: 3.25
      };
    },
    template: `
      <div>
        <vnt-rating v-model="value" disabled />
        <p class="result">value: {{ value }}</p>
      </div>`
  }))
  .add('readonly', () => ({
    data() {
      return {
        value: 3.25
      };
    },
    template: `
      <div>
        <vnt-rating v-model="value" readonly />
        <p class="result">value: {{ value }}</p>
      </div>`
  }))
  .add('max', () => ({
    data() {
      return {
        value: 6.7
      };
    },
    template: `
      <div>
        <vnt-rating v-model="value" max="10" />
        <p class="result">value: {{ value }}</p>
      </div>`
  }));
