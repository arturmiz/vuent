<template>
  <div class="playground">
    <vnt-input v-model="message"></vnt-input>
    <div class="result">message: {{ message }}</div>
  </div>
</template>

<script>
import { VntInput } from '../../../src/components';

export default {
  name: 'InputBasic',
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
