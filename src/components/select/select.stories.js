import Select from './Select.vue';

export default {
  title: 'Select',
  argTypes: {
    disabled: { control: { type: 'boolean' } }
  }
};

const countries = [
  { label: 'Australia', value: 'AUS' },
  { label: 'Belgium', value: 'BEL' },
  { label: 'Canada', value: 'CAN' },
  { label: 'Germany', value: 'GER' },
  { label: 'France', value: 'FRA' },
  { label: 'United Kingdom', value: 'GBR' },
  { label: 'United States', value: 'USA' }
];

const createData = () => ({
  country: null,
  countries,
});

const template = `
  <div style="width: 300px">
    <vnt-select v-model="country" :options="countries" :disabled="disabled"></vnt-select>
    <p class="result">country: {{ country }}</p>
  </div>
`;

export const Default = (args, { argTypes }) => ({
  components: { Select },
  data: () => createData(),
  props: Object.keys(argTypes),
  template
});

export const WithValue = (args, { argTypes }) => ({
  components: { Select },
  data: () => ({
    country: 'USA',
    countries,
  }),
  props: Object.keys(argTypes),
  template
});

export const Label = (args, { argTypes }) => ({
  components: { Select },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div style="width: 300px">
      <vnt-select v-model="country" :options="countries" :disabled="disabled" label="Country"></vnt-select>
      <p class="result">country: {{ country }}</p>
    </div>
  `
});

export const Placeholder = (args, { argTypes }) => ({
  components: { Select },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div style="width: 300px">
      <vnt-select v-model="country" :options="countries" :disabled="disabled" placeholder="Choose country"></vnt-select>
      <p class="result">country: {{ country }}</p>
    </div>
  `
});
