<template>
  <div class="playground">
    <div style="max-width: 300px">
      <vnt-select v-model="country" :options="countries" disabled></vnt-select>
    </div>
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
