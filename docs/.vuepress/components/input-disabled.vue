<template>
  <div class="playground">
    <vnt-input v-model="message" disabled></vnt-input>
  </div>
</template>

<script>
import { VntInput } from '../../../src/components';

export default {
  name: 'InputDisabled',
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
