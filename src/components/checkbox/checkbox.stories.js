import Checkbox from './Checkbox.vue';

export default {
  title: 'Checkbox',
  argTypes: {
    disabled: { control: { type: 'boolean' } }
  }
};

const createData = () => ({
  isChecked: false
});

const template = `
  <div>
    <vnt-checkbox v-model="isChecked" :disabled="disabled">Option</vnt-checkbox>
    <p class="result">isChecked: {{ isChecked }}</p>
  </div>
`;

export const Default = (args, { argTypes }) => ({
  components: { Checkbox },
  data: () => createData(),
  props: Object.keys(argTypes),
  template
});

export const Checked = (args, { argTypes }) => ({
  components: { Checkbox },
  data: () => ({
    isChecked: true
  }),
  props: Object.keys(argTypes),
  template
});
