<template>
  <label class="vnt-checkbox">
    <input class="vnt-checkbox__input"
           type="checkbox"
           :checked="checked"
           :disabled="disabled" />
    <span class="vnt-checkbox__tick"></span>
    <span class="vnt-checkbox__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'VntCheckbox',

  props: {
    label: {
      type: String,
      default: 'Checkbox'
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-checkbox {
  @include component-base();

  position: relative;
  display: flex;
  align-items: center;
  line-height: 30px;
}

.vnt-checkbox__input {
  position: absolute;
  clip-path: inset(20px 20px);

  &:checked + .vnt-checkbox__tick {
    background: $accentColor;
    border-color: $accentColor;
  }

  &:disabled + .vnt-checkbox__tick {
    border-color: #999;
  }

  &:disabled:checked + .vnt-checkbox__tick {
    background: transparent;

    &:after {
      border-color: #999;
    }
  }
}

.vnt-checkbox__tick {
  background: transparent;
  border: 2px solid #000;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  position: relative;

  &:after {
    content: '';
    width: 12px;
    height: 6px;
    position: absolute;
    top: 2px;
    left: 1px;
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
  }
}

.vnt-checkbox__text {
  padding: 0 9px;
  color: #000100;

  .vnt-checkbox__input:disabled ~ & {
    color: #999;
  }
}
</style>
