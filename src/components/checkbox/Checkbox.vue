<template>
  <label class="vnt-checkbox">
    <input class="vnt-checkbox__input"
           type="checkbox"
           :checked="checked"
           :disabled="disabled"
           v-bind="$attrs"
           @change="toggle" />
    <span class="vnt-checkbox__tick"></span>
    <span class="vnt-checkbox__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import {checked} from '../../mixins';

export default {
  name: 'VntCheckbox',

  mixins: [checked],

  props: {
    label: {
      type: String,
      default: 'Checkbox'
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
  min-height: 30px;
}

.vnt-checkbox__input {
  position: absolute;
  visibility: hidden;

  &:checked + .vnt-checkbox__tick {
    background: var(--vnt-accent-color, $fallbackAccentColor);
    border-color: var(--vnt-accent-color, $fallbackAccentColor);
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
  flex: 0 0 auto;

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
  line-height: 20px;

  .vnt-checkbox__input:disabled ~ & {
    color: #999;
  }
}
</style>
