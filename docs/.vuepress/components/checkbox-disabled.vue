<template>
  <div class="playground">
    <vnt-checkbox :checked.sync="isChecked" disabled></vnt-checkbox>
    <div class="result">isChecked: {{ isChecked }}</div>
  </div>
</template>

<script>
import { VntCheckbox } from '../../../src/components';

export default {
  name: 'CheckboxDisabled',
  components: {
    VntCheckbox
  },
  data() {
    return {
      isChecked: false
    }
  }
}
</script>
