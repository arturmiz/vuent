<template>
  <div class="playground">
    <vnt-toggle v-model="isChecked"></vnt-toggle>
    <div class="result">isChecked: {{ isChecked }}</div>
  </div>
</template>

<script>
import { VntToggle } from '../../../src/components';

export default {
  name: 'ToggleBasic',
  components: {
    VntToggle
  },
  data() {
    return {
      isChecked: false
    }
  }
}
</script>
