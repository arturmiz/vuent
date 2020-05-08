<template>
  <vnt-input v-model="localValue"
             v-bind="$attrs"
             type="date"
             @input="input" />
</template>

<script>
import VntInput from '../input/Input.vue';

export default {
  name: 'VntCalendarDatepicker',

  components: {
    VntInput
  },

  props: {
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      localValue: this.value
    };
  },

  methods: {
    input(value) {
      this.$emit('input', value);
    }
  }
};
</script>
