import Radio from './RadioButton.vue';

export default {
  title: 'Radio',
  argTypes: {
    disabled: { control: { type: 'boolean' } }
  }
};

const createData = () => ({
  value: '456'
});

export const Default = (args, { argTypes }) => ({
  components: { Radio },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div>
      <vnt-radio name="abc" value="123" v-model="value" :disabled="disabled">Radio 1</vnt-radio>
      <vnt-radio name="abc" value="456" v-model="value">Radio 2</vnt-radio>
      <vnt-radio name="abc" value="789" v-model="value">Radio 3</vnt-radio>
      <p class="result">value: {{ value }}</p>
    </div>
  `
});
