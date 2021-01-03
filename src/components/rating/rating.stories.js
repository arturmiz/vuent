import Rating from './Rating.vue';

export default {
  title: 'Rating',
  argTypes: {
    disabled: { control: { type: 'boolean' } }
  }
};

const createData = () => ({
  value: 3.25
});

export const Default = (args, { argTypes }) => ({
  components: { Rating },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div>
      <vnt-rating v-model="value" :disabled="disabled" />
      <p class="result">value: {{ value }}</p>
    </div>
  `
});

export const Readonly = () => ({
  components: { Rating },
  data: () => createData(),
  template: `
    <div>
      <vnt-rating v-model="value" readonly />
      <p class="result">value: {{ value }}</p>
    </div>
  `
});

export const Max = (args, { argTypes }) => ({
  components: { Rating },
  data: () => ({
    value: 6.7
  }),
  props: Object.keys(argTypes),
  template: `
    <div>
      <vnt-rating v-model="value" max="10" :disabled="disabled" />
      <p class="result">value: {{ value }}</p>
    </div>
  `
});
