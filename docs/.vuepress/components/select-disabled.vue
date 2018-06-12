<template>
  <div class="playground">
    <vnt-select v-model="country" :options="countries" label="Choose country" disabled></vnt-select>
    <div class="result">country: {{ country }}</div>
  </div>
</template>

<script>
import { VntSelect } from '../../../src/components';

export default {
  name: 'SelectDisabled',
  components: {
    VntSelect
  },
  data() {
    return {
      country: 'USA',
      countries: [
        { label: 'Australia', value: 'AUS' },
        { label: 'Belgium', value: 'BEL' },
        { label: 'Canada', value: 'CAN' },
        { label: 'Germany', value: 'GER' },
        { label: 'France', value: 'FRA' },
        { label: 'United Kingdom', value: 'GBR' },
        { label: 'United States', value: 'USA' }
      ]
    }
  }
}
</script>
