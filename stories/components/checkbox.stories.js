import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0 */
storiesOf('Checkbox', module)
  .add('default', () => ({
    data() {
      return {
        isChecked: false
      };
    },
    template: `
      <div>
        <vnt-checkbox v-model="isChecked">Option</vnt-checkbox>
        <p class="result">isChecked: {{ isChecked }}</p>
      </div>`
  }))
  .add('checked', () => ({
    data() {
      return {
        isChecked: true
      };
    },
    template: `
      <div>
        <vnt-checkbox v-model="isChecked"></vnt-checkbox>
        <p class="result">isChecked: {{ isChecked }}</p>
      </div>`
  }))
  .add('disabled', () => ({
    data() {
      return {
        isChecked: true
      };
    },
    template: `
      <div>
        <vnt-checkbox v-model="isChecked" disabled></vnt-checkbox>
        <p class="result">isChecked: {{ isChecked }}</p>
      </div>`
  }));
