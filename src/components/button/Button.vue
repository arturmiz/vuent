<template>
  <button class="vnt-button"
          :type="type"
          :disabled="disabled"
          @click="click">{{ label }}</button>
</template>

<script>
export default {
  name: 'VntButton',

  props: {
    label: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-button {
  @include component-base();

  line-height: 30px;
  background: #ccc;
  padding: 0 37px;
  border: 1px solid #ccc;
  color: #000100;

  &:hover {
    border-color: #979797;
  }

  &:active {
    background: #979797;
  }

  &:disabled {
    color: #7a7a7a;

    &:hover {
      border-color: #ccc;
    }
  }
}
</style>
