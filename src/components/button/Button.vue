<template>
  <button class="vnt-button"
          :class="{'vnt-button--primary': primary}"
          :type="type"
          :disabled="disabled"
          @click="click">
    <slot>{{ label }}</slot>
  </button>
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
    },
    primary: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

$buttonBaseColor: #ccc;

.vnt-button {
  @include component-base();

  line-height: 30px;
  background: $buttonBaseColor;
  padding: 0 37px;
  border: 1px solid $buttonBaseColor;
  color: #000100;
  border-radius: 0;

  & ~ & {
    margin-left: 4px;
  }

  &:hover {
    border-color: #979797;
  }

  &:active {
    background: #979797;
  }

  &:disabled {
    color: #7a7a7a;

    &:hover {
      border-color: $buttonBaseColor;
    }
  }
}

.vnt-button--primary {
  background: var(--vnt-accent-color, $fallbackAccentColor);
  border-color: var(--vnt-accent-color, $fallbackAccentColor);
  color: #fff;

  &:hover {
    border-color: #7a7a7a;
  }

  &:disabled {
    background: $buttonBaseColor;
    border-color: $buttonBaseColor;
  }
}
</style>
