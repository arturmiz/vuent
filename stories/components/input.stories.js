import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0 */
storiesOf('Input', module)
  .add('default', () => ({
    data() {
      return {
        message: 'Hello Vuent!'
      };
    },
    template: `
      <div>
        <vnt-input v-model="message" />
        <p class="result">message: {{ message }}</p>
      </div>`
  }))
  .add('disabled', () => ({
    data() {
      return {
        message: 'Hello Vuent!'
      };
    },
    template: '<vnt-input v-model="message" disabled></vnt-input>'
  }))
  .add('label', () => ({
    data() {
      return {
        message: 'Hello Vuent!'
      };
    },
    template: '<vnt-input v-model="message" label="Custom label"></vnt-input>'
  }))
  .add('password', () => ({
    data() {
      return {
        pass: 'pass123'
      };
    },
    template: `
      <div>
        <vnt-input v-model="pass" type="password"></vnt-input>
        <p class="result">password: {{ pass }}</p>
      </div>`
  }))
  .add('placeholder', () => ({
    data() {
      return {
        message: null
      };
    },
    template: '<vnt-input v-model="message" placeholder="Type message here"></vnt-input>'
  }));
