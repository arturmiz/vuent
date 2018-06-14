<template>
  <div class="playground">
    <vnt-input type="password" v-model="pass"></vnt-input>
    <div class="result">password: {{ pass }}</div>
  </div>
</template>

<script>
import { VntInput } from '../../../src/components';

export default {
  name: 'InputPassword',
  components: {
    VntInput
  },
  data() {
    return {
      pass: '12345'
    }
  }
}
</script>
