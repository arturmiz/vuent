<template>
  <div class="vnt-slider">

    <label class="vnt-slider__title"
           :class="{'vnt-slider__title--disabled': disabled}">
      <slot>{{ label }}</slot>
    </label>

    <input class="vnt-slider__input"
           :disabled="disabled"
           :max="max"
           :min="min"
           type="range"
           :value="value"
           @input="input"
           v-bind="$attrs" />

  </div>
</template>

<script>
export default {
  name: 'VntSlider',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Slider'
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 50
    }
  },

  methods: {
    input($event) {
      if (!this.disabled) {
        this.$emit('input', parseFloat($event.target.value));
      }
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-slider {
  @include component-base();

  margin: 8px 0;
}

.vnt-slider__title {
  display: block;
  line-height: 30px;
  margin-bottom: 4px;
  color: #000100;

  &--disabled {
    color: lighten(#000, 60%);
  }
}

.vnt-slider__input {
  -webkit-appearance: none;
  width: 100%;
  margin: 8px 0;

  &:focus {
    outline: none;
  }

  @mixin track() {
    background: lighten(#000, 60%);
    height: 2px;
  }

  &::-ms-track {
    height: 24px;
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    @include track;
  }

  &::-ms-fill-lower {
    background: $accentColor;
  }

  &::-moz-range-track {
    @include track;
  }

  &::-moz-progress-bar {
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  &::-webkit-slider-runnable-track {
    @include track;
  }

  @mixin thumb() {
    background: $accentColor;
    height: 24px;
    width: 8px;
    border-radius: 4px;
    cursor: pointer;
    border: 0;
    margin: 0;

    &:focus {
      background: #000;
    }
  }

  &::-ms-thumb {
    @include thumb;
  }

  &::-webkit-slider-thumb {
    @include thumb;

    -webkit-appearance: none;
    margin-top: -11px;
    margin-bottom: 11px;
  }

  &::-moz-range-thumb {
    @include thumb;
  }

  &:disabled {

    @mixin slider-disabled() {
      background: lighten(#000, 80%);
      cursor: default;
    }

    &::-ms-fill-lower,
    &::-ms-fill-upper,
    &::-ms-thumb {
      @include slider-disabled;
    }

    &::-webkit-slider-thumb,
    &::-webkit-slider-runnable-track {
      @include slider-disabled;
    }

    &::-moz-range-track,
    &::-moz-range-thumb {
      @include slider-disabled;
    }
  }

}
</style>
