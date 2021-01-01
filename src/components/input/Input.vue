<template>
  <label class="vnt-input">
    <span v-if="label"
          class="vnt-input__label">
      {{ label }}
    </span>
    <input class="vnt-input__control"
           :disabled="disabled"
           :type="type"
           :placeholder="placeholder"
           :value="value"
           v-bind="$attrs"
           @input="input" />
  </label>
</template>

<script>
export default {
  name: 'VntInput',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },

  methods: {
    input($event) {
      this.$emit('input', $event.target.value);
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-input {
  @include component-base();

  color: #000100;
  display: block;
  margin: 10px 0;
}

.vnt-input__label {
  display: block;
  padding: 10px 0;
  line-height: 20px;

  .vnt-input__control:disabled ~ & {
    color: #ccc;
  }
}

.vnt-input__control {
 @include component-input();
}
</style>
