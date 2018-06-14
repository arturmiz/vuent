<template>
  <div class="playground">
    <vnt-radio name="abc" value="123" v-model="radioValue">Radio 1</vnt-radio>
    <vnt-radio name="abc" value="456" v-model="radioValue">Radio 2</vnt-radio>
    <div class="result">radioValue: {{ radioValue }}</div>
  </div>
</template>

<script>
import { VntRadio } from '../../../src/components';

export default {
  name: 'RadioBasic',
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
