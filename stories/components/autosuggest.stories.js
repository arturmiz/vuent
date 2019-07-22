import { storiesOf } from '@storybook/vue';

const countries = [
  'Australia',
  'Belgium',
  'Canada',
  'China',
  'France',
  'Germany',
  'Poland',
  'United Kingdom',
  'United States',
];

const createData = () => ({
  country: null,
  countries
});

/* eslint no-undef: 0 */
storiesOf('Autosuggest', module)
  .add('default', () => ({
    data: () => createData(),
    template: `
      <div>
        <vnt-autosuggest v-model="country" :options="countries"></vnt-autosuggest>
        <p class="result">country: {{ country }}</p>
      </div>`
  }))
  .add('disabled', () => ({
    data: () => createData(),
    template: `
      <div>
        <vnt-autosuggest v-model="country" :options="countries" disabled></vnt-autosuggest>
        <p class="result">country: {{ country }}</p>
      </div>`
  }))
  .add('label', () => ({
    data: () => createData(),
    template: `
      <div>
        <vnt-autosuggest v-model="country" :options="countries" label="Country"></vnt-autosuggest>
        <p class="result">country: {{ country }}</p>
      </div>`
  }))
  .add('placeholder', () => ({
    data: () => createData(),
    template: `
      <div>
        <vnt-autosuggest v-model="country" :options="countries" placeholder="Choose country"></vnt-autosuggest>
        <p class="result">country: {{ country }}</p>
      </div>`
  }));
