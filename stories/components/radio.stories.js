import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0 */
storiesOf('Radio', module)
  .add('default', () => ({
    data() {
      return {
        value: '456'
      };
    },
    template: `
      <div>
        <vnt-radio name="abc" value="123" v-model="value">Radio 1</vnt-radio>
        <vnt-radio name="abc" value="456" v-model="value">Radio 2</vnt-radio>
        <vnt-radio name="abc" value="789" v-model="value">Radio 3</vnt-radio>
        <p class="result">value: {{ value }}</p>
      </div>`
  }))
  .add('disabled', () => ({
    data() {
      return {
        value: '456'
      };
    },
    template: `
      <div>
        <vnt-radio name="xyz" value="456" v-model="value" disabled>Radio</vnt-radio>
        <p class="result">value: {{ value }}</p>
      </div>`
  }));
