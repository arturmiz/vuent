<template>
  <label class="vnt-radio">
    <input class="vnt-radio__input"
           type="radio"
           :checked="checked"
           :disabled="disabled"
           :name="name" />
    <span class="vnt-radio__icon"></span>
    <span class="vnt-radio__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'VntRadio',

  props: {
    label: {
      type: String,
      default: 'Radio'
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'radio'
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-radio {
  @include component-base();

  position: relative;
  display: flex;
  align-items: center;
  min-height: 30px;
}

.vnt-radio__input {
  position: absolute;
  clip-path: inset(20px 20px);

  &:checked + .vnt-radio__icon {
    border-color: $accentColor;

    &:after {
      content: '';
    }
  }

  &:disabled + .vnt-radio__icon {
    border-color: #999;
  }

  &:disabled:checked + .vnt-radio__icon {
    &:after {
      background: #999;
    }
  }
}

.vnt-radio__icon {
  background: transparent;
  border: 2px solid #333;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;
  flex: 0 0 auto;

  &:after {
    background: #000100;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 50%;
  }
}

.vnt-radio__text {
  padding: 0 9px;
  color: #000100;
  line-height: 20px;

  .vnt-radio__input:disabled ~ & {
    color: #999;
  }
}
</style>
