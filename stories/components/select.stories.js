import { storiesOf } from '@storybook/vue';

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

storiesOf('Select', module)
  .add('default', () => ({
    data: () => createData(),
    template: `
      <div style="width: 300px">
        <vnt-select v-model="country" :options="countries"></vnt-select>
        <p class="result">country: {{ country }}</p>
      </div>`
  }))
  .add('disabled', () => ({
    data() {
      return {
        country: 'USA',
        countries
      };
    },
    template: `
      <div style="width: 300px">
        <vnt-select v-model="country" :options="countries" disabled></vnt-select>
        <p class="result">country: {{ country }}</p>
      </div>`
  }))
  .add('label', () => ({
    data: () => createData(),
    template: `
      <div style="width: 300px">
        <vnt-select v-model="country" :options="countries" label="Country"></vnt-select>
        <p class="result">country: {{ country }}</p>
      </div>`
  }))
  .add('placeholder', () => ({
    data: () => createData(),
    template: `
      <div style="width: 300px">
        <vnt-select v-model="country" :options="countries" placeholder="Choose country"></vnt-select>
        <p class="result">country: {{ country }}</p>
      </div>`
  }));
