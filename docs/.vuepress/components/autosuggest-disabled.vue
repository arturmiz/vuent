<template>
  <div class="playground">
    <vnt-autosuggest v-model="country"
                     :options="countries" disabled></vnt-autosuggest>
    <div class="result">country: {{ country }}</div>
  </div>
</template>

<script>
import { VntAutosuggest } from '../../../src/components';

export default {
  name: 'AutosuggestDisabled',
  components: {
    VntAutosuggest
  },
  data() {
    return {
      country: null,
      countries: [
        'Australia',
        'Belgium',
        'Canada',
        'China',
        'France',
        'Germany',
        'Poland',
        'United Kingdom',
        'United States',
      ]
    }
  }
}
</script>
