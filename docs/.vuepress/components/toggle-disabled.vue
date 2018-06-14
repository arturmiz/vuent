<template>
  <div class="playground">
    <vnt-toggle :checked.sync="isChecked" disabled></vnt-toggle>
  </div>
</template>

<script>
import { VntToggle } from '../../../src/components';

export default {
  name: 'ToggleDisabled',
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
