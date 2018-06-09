<template>
  <div class="playground">
    <vnt-radio name="xyz" value="123" v-model="radioValue" disabled>Radio</vnt-radio>
    <div class="result">radioValue: {{ radioValue }}</div>
  </div>
</template>

<script>
import { VntRadio } from '../../../src/components';

export default {
  name: 'RadioDisabled',
  components: {
    VntRadio
  },
  data() {
    return {
      radioValue: '123'
    }
  }
}
</script>
