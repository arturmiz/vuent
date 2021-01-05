import Autosuggest from './Autosuggest.vue';

export default {
  title: 'Autosuggest'
};

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

export const Default = () => ({
  components: { Autosuggest },
  data: () => createData(),
  template: `
    <div>
      <vnt-autosuggest v-model="country" :options="countries"></vnt-autosuggest>
      <p class="result">country: {{ country }}</p>
    </div>
  `
});

export const Disabled = () => ({
  components: { Autosuggest },
  data: () => createData(),
  template: `
    <div>
      <vnt-autosuggest v-model="country" :options="countries" disabled></vnt-autosuggest>
      <p class="result">country: {{ country }}</p>
    </div>
  `
});

export const Label = () => ({
  components: { Autosuggest },
  data: () => createData(),
  template: `
    <div>
      <vnt-autosuggest v-model="country" :options="countries" label="Country"></vnt-autosuggest>
      <p class="result">country: {{ country }}</p>
    </div>
  `
});

export const Placeholder = () => ({
  components: { Autosuggest },
  data: () => createData(),
  template: `
    <div>
      <vnt-autosuggest v-model="country" :options="countries" placeholder="Choose country"></vnt-autosuggest>
      <p class="result">country: {{ country }}</p>
    </div>
  `
});
