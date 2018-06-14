<template>
  <div class="playground">
    <vnt-input v-model="message" placeholder="Type message here"></vnt-input>
    <div class="result">message: {{ message }}</div>
  </div>
</template>

<script>
import { VntInput } from '../../../src/components';

export default {
  name: 'InputPlaceholder',
  components: {
    VntInput
  },
  data() {
    return {
      message: ''
    }
  }
}
</script>
