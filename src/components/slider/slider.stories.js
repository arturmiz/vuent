import Slider from './Slider.vue';

export default {
  title: 'Slider',
  argTypes: {
    disabled: { control: { type: 'boolean' } }
  }
};

const createData = () => ({
  value: 5
});

export const Default = (args, { argTypes }) => ({
  components: { Slider },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div style="width: 300px">
      <vnt-slider v-model="value" :disabled="disabled">Density</vnt-slider>
      <p class="result">value: {{ value }}</p>
    </div>
  `
});

export const Range = (args, { argTypes }) => ({
  components: { Slider },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div style="width: 300px">
      <vnt-slider v-model="value" min="-10" max="10" :disabled="disabled">Density</vnt-slider>
      <p class="result">value: {{ value }}</p>
    </div>
  `
});
