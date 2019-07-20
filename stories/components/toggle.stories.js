import { storiesOf } from '@storybook/vue';

storiesOf('Toggle', module)
  .add('default', () => ({
    data() {
      return {
        isChecked: false
      };
    },
    template: `
      <div>
        <vnt-toggle v-model="isChecked">Option</vnt-toggle>
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
        <vnt-toggle v-model="isChecked"></vnt-toggle>
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
        <vnt-toggle v-model="isChecked" disabled></vnt-toggle>
        <p class="result">isChecked: {{ isChecked }}</p>
      </div>`
  }))
  .add('on/off labels', () => ({
    data() {
      return {
        isChecked: false
      };
    },
    template: `
      <div>
        <vnt-toggle v-model="isChecked" label-on="Yes" label-off="No"></vnt-toggle>
        <p class="result">isChecked: {{ isChecked }}</p>
      </div>`
  }));
