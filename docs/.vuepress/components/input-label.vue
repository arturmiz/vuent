<template>
  <div class="playground">
    <vnt-input v-model="message" label="Custom label"></vnt-input>
    <div class="result">message: {{ message }}</div>
  </div>
</template>

<script>
import { VntInput } from '../../../src/components';

export default {
  name: 'InputLabel',
  components: {
    VntInput
  },
  data() {
    return {
      message: 'Hello'
    }
  }
}
</script>
