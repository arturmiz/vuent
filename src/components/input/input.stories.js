import Input from './Input.vue';

export default {
  title: 'Input',
  argTypes: {
    disabled: { control: { type: 'boolean' } }
  }
};

const createData = () => ({
  message: 'Hello Vuent!'
});

export const Default = (args, { argTypes }) => ({
  components: { Input },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div>
      <vnt-input v-model="message" :disabled="disabled" />
      <p class="result">message: {{ message }}</p>
    </div>
  `
});

export const WithLabel = (args, { argTypes }) => ({
  components: { Input },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div>
      <vnt-input v-model="message" :disabled="disabled" label="Custom label" />
      <p class="result">message: {{ message }}</p>
    </div>
  `
});

export const Password = (args, { argTypes }) => ({
  components: { Input },
  data: () => ({
    pass: 'pass123'
  }),
  props: Object.keys(argTypes),
  template: `
    <div>
      <vnt-input v-model="pass" type="password"></vnt-input>
      <p class="result">password: {{ pass }}</p>
    </div>
  `
});

export const Placeholder = (args, { argTypes }) => ({
  components: { Input },
  data: () => ({
    message: null
  }),
  props: Object.keys(argTypes),
  template: `
    <vnt-input v-model="message" placeholder="Type message here"></vnt-input>
  `
});
