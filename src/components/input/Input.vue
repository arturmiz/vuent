<template>
  <label class="vnt-input">
    <span class="vnt-input__text"
          v-if="label">
      {{ label }}
    </span>
    <input class="vnt-input__control"
           :disabled="disabled"
           :type="type"
           :placeholder="placeholder"
           :value="value"
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
      type: String,
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

.vnt-input__text {
  display: block;
  padding: 10px 0;
  line-height: 20px;

  .vnt-input__control:disabled ~ & {
    color: #ccc;
  }
}

.vnt-input__control {
  @include component-base();

  color: #000100;
  padding: 0 10px;
  line-height: 30px;
  box-sizing: border-box;
  min-width: 290px;
  border: 2px solid #7a7a7a;
  margin: 0;

  &::placeholder {
    color: #666;
  }

  &:disabled {
    background-color: transparent;
    border-color: #ccc;
    color: #999;
  }

  &:focus {
    border-color: $accentColor;
    outline: 0;
  }
}
</style>
