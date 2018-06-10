<template>
  <div class="playground">
    <vnt-toggle :checked.sync="isChecked">Custom label</vnt-toggle>
    <div class="result">isChecked: {{ isChecked }}</div>
  </div>
</template>

<script>
import { VntToggle } from '../../../src/components';

export default {
  name: 'ToggleLabel',
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
