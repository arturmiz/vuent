<template>
  <div class="playground">
    <vnt-toggle v-model="isChecked" label-on="Yes" label-off="No"></vnt-toggle>
    <div class="result">isChecked: {{ isChecked }}</div>
  </div>
</template>

<script>
import { VntToggle } from '../../../src/components';

export default {
  name: 'ToggleOnOffLabels',
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
