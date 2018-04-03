<template>
  <div class="vnt-toggle">

    <span class="vnt-toggle__title"
          :class="{'vnt-toggle__title--disabled': disabled}">
      <slot>{{ label }}</slot>
    </span>

    <label class="vnt-toggle__wrapper"
           @click="toggle">
      <input class="vnt-toggle__input"
             type="checkbox"
             :checked="checked"
             :disabled="disabled" />
      <span class="vnt-toggle__switch"></span>
      <span class="vnt-toggle__text vnt-toggle__text--off">{{ labelOff }}</span>
      <span class="vnt-toggle__text vnt-toggle__text--on">{{ labelOn }}</span>
    </label>

  </div>
</template>

<script>
import {checked} from '../../mixins';

export default {
  name: 'VntToggle',

  mixins: [checked],

  props: {
    label: {
      type: String,
      default: 'Toggle'
    },
    labelOff: {
      type: String,
      default: 'Off'
    },
    labelOn: {
      type: String,
      default: 'On'
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-toggle {
  @include component-base();

  margin: 8px 0;
}

.vnt-toggle__title {
  display: block;
  line-height: 30px;
  margin-bottom: 4px;

  &--disabled {
    color: #999;
  }
}

.vnt-toggle__wrapper {
  display: inline-flex;
  align-items: center;
  position: relative;
}

.vnt-toggle__input {
  position: absolute;
  visibility: hidden;

  &:checked + .vnt-toggle__switch {
    background: $accentColor;
    border-color: $accentColor;

    &:after {
      background: #fff;
      left: 27px
    }
  }

  &:disabled + .vnt-toggle__switch {
    background: #ccc;
    border-color: #ccc;

    &:after {
      background: #a3a3a3;
    }
  }
}

.vnt-toggle__switch {
  background: transparent;
  border: 2px solid #333;
  border-radius: 10px;
  box-sizing: border-box;
  width: 44px;
  height: 20px;
  position: relative;
  display: block;
  flex: 0 0 auto;

  &:after {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: #333;
    border-radius: 50%;
    transition: left 0.4s ease;
  }
}

.vnt-toggle__text {
  padding: 0 9px;
  color: #000100;
  line-height: 20px;
  display: block;

  .vnt-toggle__input:disabled ~ & {
    color: #999;
  }

  &--on {
    display: none;

    .vnt-toggle__input:checked ~ & {
      display: block;
    }
  }

  &--off {
    display: block;

    .vnt-toggle__input:checked ~ & {
      display: none;
    }
  }
}
</style>
